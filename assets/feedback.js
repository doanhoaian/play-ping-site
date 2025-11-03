document.addEventListener('DOMContentLoaded', () => {
    const SUPPORT_EMAIL = 'dihaver.studio@gmail.com';
    const i18n = (window.__playPingI18n && window.__playPingI18n.strings) || {};
    const defaults = {
        feedbackTypeBug: 'Báo lỗi',
        feedbackTypeFeature: 'Yêu cầu tính năng',
        feedbackTypeOther: 'Khác',
        feedbackSubjectPrefix: 'Phản hồi',
        feedbackSubjectBug: 'Báo lỗi',
        feedbackSubjectFeature: 'Yêu cầu tính năng',
        feedbackSubjectOther: 'Khác',
        feedbackErrorRequired: 'Trường này là bắt buộc.',
        feedbackErrorTooShort: min => `Cần ít nhất ${min} ký tự.`,
        feedbackErrorTooLong: max => `Tối đa ${max} ký tự.`,
        feedbackErrorInvalid: 'Giá trị không hợp lệ.',
        feedbackErrorSeverityRequired: 'Vui lòng chọn mức độ lỗi.',
        feedbackBotDetected: 'Phát hiện bot.',
        feedbackValidationError: 'Vui lòng kiểm tra lại các trường được đánh dấu.',
        feedbackSubmitting: 'Đang chuẩn bị email...',
        feedbackSubmitSuccess: 'Đã mở ứng dụng email của bạn. Vui lòng kiểm tra và nhấn Gửi trong email ✉️',
        feedbackSubmitFailure: 'Không mở được ứng dụng email. Vui lòng gửi email tới ' + SUPPORT_EMAIL,
        feedbackSubmitLabel: 'Gửi phản hồi',
        feedbackTrimmedNote: '(ĐÃ RÚT GỌN)'
    };

    function tr(key) {
        const value = i18n[key];
        if (value !== undefined) return value;
        return defaults[key];
    }

    function trf(key, ...args) {
        const value = tr(key);
        if (typeof value === 'function') {
            return value(...args);
        }
        return value;
    }

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
        if (v.valueMissing) return tr('feedbackErrorRequired');
        if (v.tooShort) return trf('feedbackErrorTooShort', el.minLength);
        if (v.tooLong) return trf('feedbackErrorTooLong', el.maxLength);
        return tr('feedbackErrorInvalid');
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
                if (minFail(el)) setError(el, trf('feedbackErrorTooShort', el.minLength));
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
                    setError(el, trf('feedbackErrorTooShort', el.minLength));
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
            setError(sevEl, tr('feedbackErrorSeverityRequired'));
            ok = false;
        }
        return ok;
    }

    function sanitizeLine(s) {
        return (s || '').toString().replace(/[\r\n]+/g, '\n').trim();
    }
    function buildEmailSubject() {
        const prefix = tr('feedbackSubjectPrefix') || defaults.feedbackSubjectPrefix;
        const typeKey = typeEl.value === 'bug' ? 'feedbackSubjectBug' : typeEl.value === 'feature' ? 'feedbackSubjectFeature' : 'feedbackSubjectOther';
        const typeLabel = tr(typeKey) || defaults[typeKey] || '';
        const sev = typeEl.value === 'bug' && sevEl.value ? `[${sevEl.options[sevEl.selectedIndex].text}]` : '';
        const ttl = title.value.trim();
        const parts = [`[${prefix}]`];
        if (typeLabel) parts.push(`[${typeLabel}]`);
        if (sev) parts.push(sev);
        parts.push(ttl);
        return parts.filter(Boolean).join(' ').trim().slice(0, 200);
    }
    function buildEmailBody() {
        const MAX_DESC = 1500;
        let descText = sanitizeLine(desc.value);
        if (descText.length > MAX_DESC) {
            descText = descText.slice(0, MAX_DESC) + `\n\n${tr('feedbackTrimmedNote') || defaults.feedbackTrimmedNote}`;
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
            statusEl.textContent = tr('feedbackBotDetected');
            return;
        }
        if (!validate()) {
            statusEl.textContent = tr('feedbackValidationError');
            const firstInvalid = form.querySelector('.ip.error');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = tr('feedbackSubmitting');
        try {
            openMailClient();
            statusEl.textContent = tr('feedbackSubmitSuccess');
        } catch (err) {
            statusEl.textContent = tr('feedbackSubmitFailure');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = tr('feedbackSubmitLabel');
        }
    });
});
