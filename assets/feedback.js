document.addEventListener('DOMContentLoaded', () => {
    const SUPPORT_EMAIL = 'dihaver.studio@gmail.com';
    const form = document.getElementById('fbForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusEl = document.getElementById('status');
    const typeEl = document.getElementById('type');
    const sevEl = document.getElementById('severity');
    const sevWrap = document.getElementById('sevWrap');
    const title = document.getElementById('title');
    const titleCounter = document.getElementById('titleCounter');
    const desc = document.getElementById('description');
    const descCounter = document.getElementById('descCounter');

    function clearError(el) {
        if (!el) return;
        el.classList.remove('error');
        const err = document.getElementById(el.id + 'Error');
        if (err) err.classList.remove('show'), (err.textContent = '');
    }
    function setError(el, message) {
        if (!el) return;
        el.classList.add('error');
        const err = document.getElementById(el.id + 'Error');
        if (err) (err.textContent = message), err.classList.add('show');
    }
    function messageFor(el) {
        const v = el.validity;
        if (v.valueMissing) return 'Trường này là bắt buộc.';
        if (v.tooShort) return `Cần ít nhất ${el.minLength} ký tự.`;
        if (v.tooLong) return `Tối đa ${el.maxLength} ký tự.`;
        return 'Giá trị không hợp lệ.';
    }
    function minFail(el) {
        const min = el.minLength > 0 ? el.minLength : 0;
        const len = el.value.trim().length;
        return min > 0 && len > 0 && len < min;
    }
    function toggleSeverity() {
        const isBug = typeEl.value === 'bug';
        sevEl.required = isBug;
        sevWrap.style.display = isBug ? '' : 'none';
        if (!isBug) {
            sevEl.value = '';
            clearError(sevEl);
        }
    }
    typeEl.addEventListener('change', toggleSeverity);
    toggleSeverity();

    function updateCounter(input, counter) {
        if (input && counter) counter.textContent = `${input.value.length} / ${input.maxLength}`;
    }
    ['input', 'change', 'blur'].forEach(evt => {
        if (title && titleCounter) title.addEventListener(evt, () => updateCounter(title, titleCounter));
        if (desc && descCounter) desc.addEventListener(evt, () => updateCounter(desc, descCounter));
    });
    updateCounter(title, titleCounter);
    updateCounter(desc, descCounter);

    [typeEl, sevEl, title, desc].forEach(el => {
        if (!el) return;
        el.addEventListener('invalid', ev => {
            ev.preventDefault();
            setError(el, messageFor(el));
        });
        el.addEventListener('input', () => clearError(el));
        el.addEventListener('change', () => clearError(el));
        el.addEventListener('blur', () => {
            if (el === title || el === desc) {
                if (minFail(el)) setError(el, `Cần ít nhất ${el.minLength} ký tự.`);
                else clearError(el);
            } else if (!el.checkValidity()) {
                setError(el, messageFor(el));
            }
        });
    });

    function validate() {
        let ok = true;
        [title, desc].forEach(el => {
            if (!el) return;
            if (el === title || el === desc) {
                if (minFail(el)) {
                    setError(el, `Cần ít nhất ${el.minLength} ký tự.`);
                    ok = false;
                    return;
                }
            }
            if (!el.checkValidity()) {
                setError(el, messageFor(el));
                ok = false;
            }
        });
        if (typeEl.value === 'bug' && !sevEl.value) {
            setError(sevEl, 'Vui lòng chọn mức độ lỗi.');
            ok = false;
        }
        return ok;
    }

    function sanitizeLine(s) {
        return (s || '').toString().replace(/[\r\n]+/g, '\n').trim();
    }
    function buildEmailSubject() {
        const typeMap = { bug: 'Bug', feature: 'Feature', other: 'Other' };
        const prefix = typeMap[typeEl.value] || 'Feedback';
        const sev = typeEl.value === 'bug' && sevEl.value ? `[${sevEl.options[sevEl.selectedIndex].text}]` : '';
        const ttl = title.value.trim();
        return `[${prefix}]${sev ? sev : ''} ${ttl}`.slice(0, 200);
    }
    function buildEmailBody() {
        const MAX_DESC = 1500;
        let descText = sanitizeLine(desc.value);
        if (descText.length > MAX_DESC) {
            descText = descText.slice(0, MAX_DESC) + '\n\n(ĐÃ RÚT GỌN)';
        }
        return descText;
    }
    function openMailClient() {
        const subject = encodeURIComponent(buildEmailSubject());
        const body = encodeURIComponent(buildEmailBody());
        const mailto = `mailto:${encodeURIComponent(SUPPORT_EMAIL)}?subject=${subject}&body=${body}`;
        const w = window.open(mailto, '_blank');
        if (!w) window.location.href = mailto;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        statusEl.textContent = '';
        [title, desc, sevEl].forEach(clearError);
        if (document.getElementById('website_hp').value) {
            statusEl.textContent = 'Phát hiện bot.';
            return;
        }
        if (!validate()) {
            statusEl.textContent = 'Vui lòng kiểm tra lại các trường được đánh dấu.';
            const firstInvalid = form.querySelector('.ip.error');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang chuẩn bị email...';
        try {
            openMailClient();
            statusEl.textContent = 'Đã mở ứng dụng email của bạn. Vui lòng kiểm tra và nhấn Gửi trong email ✉️';
        } catch (err) {
            statusEl.textContent = 'Không mở được ứng dụng email. Vui lòng gửi email tới ' + SUPPORT_EMAIL;
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Gửi phản hồi';
        }
    });
});