// Reveal on scroll
const reveals = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.2 });
revelsInit();
function revelsInit() { reveals.forEach(el => io.observe(el)); }


// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();


// Locale auto-detection
const FALLBACK_LOCALE = 'vi';
const supportedLocales = ['vi', 'en'];
const SITE_ORIGIN = 'https://playping.dihaver.tech';
const PAGE_SLUGS = {
    home: '',
    feedback: 'feedback.html',
    privacy: 'privacy.html',
    terms: 'terms.html',
    vpnBlock: 'vpn-mode-block.html'
};
const translations = {
    vi: {
        common: {
            brandName: 'PlayPing',
            headerPlayBadgeAlt: 'Tải xuống trên Google Play',
            headerPlayBadgeSrc: 'https://play.google.com/intl/vi/badges/static/images/badges/vi_badge_web_generic.png',
            footerPrivacy: 'Chính sách bảo mật',
            footerTerms: 'Điều khoản',
            footerContact: 'Liên hệ',
            backToHome: 'Về trang chủ',
        },
        pages: {
            home: {
                meta: {
                    title: 'PlayPing',
                    description: 'PlayPing giúp bạn mô phỏng các sự cố mạng (mất gói, delay, giới hạn băng thông, đứt kết nối) để kiểm thử và huấn luyện ngay trên Android.',
                    ogTitle: 'PlayPing - Mô phỏng sự cố mạng Android',
                    ogDescription: 'PlayPing giúp bạn mô phỏng mất gói, delay, giới hạn băng thông, đứt kết nối để kiểm thử và huấn luyện app/game Android.',
                    schemaDescription: 'PlayPing giúp bạn mô phỏng các sự cố mạng (mất gói, delay, giới hạn băng thông, đứt kết nối) để kiểm thử và huấn luyện ngay trên Android.'
                },
                strings: {
                    heroHeading: 'Mô phỏng mạng <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">ngay trên Android</span>',
                    heroSubheading: 'Giả lập mất gói, tăng độ trễ, giới hạn băng thông hay ngắt kết nối – giúp bạn kiểm thử ứng dụng, game và luyện tập trong điều kiện mạng thực tế.',
                    heroSecondaryCta: 'Khám phá tính năng',
                    featuresTitle: 'Tính năng nổi bật',
                    featuresSubtitle: 'Trải nghiệm mô phỏng mạng dễ dàng, trực quan và an toàn.',
                    feature1Title: 'Bong bóng nổi',
                    feature1Description: 'Điều khiển nhanh mọi chức năng mô phỏng ngay trên màn hình với bong bóng nổi tiện lợi.',
                    feature2Title: 'Mô phỏng thực tế',
                    feature2Description: 'Tái tạo các tình huống mạng thường gặp: lag, giật, mất kết nối để kiểm thử ứng dụng và game.',
                    feature3Title: 'Tùy chỉnh nâng cao',
                    feature3Description: 'Tự do cấu hình delay, jitter, loss, băng thông... phù hợp kịch bản kiểm thử của bạn.',
                    feature4Title: 'An toàn &amp; bảo mật',
                    feature4Description: 'Không thu thập dữ liệu cá nhân. Toàn bộ mô phỏng chạy cục bộ qua VPN an toàn.',
                    screensTitle: 'Ảnh màn hình',
                    screensSubtitle: 'Một số giao diện chính của PlayPing.',
                    headerPlayBadgeAlt: 'Tải xuống trên Google Play',
                    heroPlayBadgeAlt: 'Tải xuống trên Google Play',
                    heroPlayBadgeSrc: 'https://play.google.com/intl/vi/badges/static/images/badges/vi_badge_web_generic.png'
                }
            },
            privacy: {
                meta: {
                    title: 'Chính sách Quyền riêng tư',
                    description: 'PlayPing không thu thập dữ liệu cá nhân nhận dạng. Ứng dụng dùng Android VpnService để mô phỏng mạng và có thể định tuyến tạm qua máy chủ trung gian (không ghi log). Có dùng Firebase (ví dụ cho thông báo đẩy và chẩn đoán) và backend để cập nhật/đẩy thông báo.',
                    ogTitle: 'Privacy Policy – PlayPing',
                    ogDescription: 'PlayPing không thu thập dữ liệu cá nhân nhận dạng; dùng Android VpnService để mô phỏng mạng. Firebase và backend chỉ xử lý dữ liệu kỹ thuật phục vụ vận hành/đẩy thông báo.'
                },
                strings: {
                    pageHeading: 'Chính sách Quyền riêng tư',
                    pageUpdated: 'Cập nhật lần cuối: <time datetime="2025-09-28">28/09/2025</time>',
                    privacyContent: `<div class="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
                <h3 class="m-0 text-lg font-semibold">Tóm tắt nhanh</h3>
                <ul class="mt-3">
                    <li><strong>Không thu thập dữ liệu cá nhân nhận dạng (PII).</strong> Không yêu cầu tài khoản.</li>
                    <li>Sử dụng <code>Android VpnService</code> để mô phỏng mạng; xử lý chủ yếu <strong>cục bộ trên thiết bị</strong>.</li>
                    <li>Có thể định tuyến tạm thời qua máy chủ trung gian để duy trì kết nối; <strong>không ghi log nội dung</strong>.</li>
                    <li>Dùng <strong>Firebase</strong> và <strong>backend của PlayPing</strong> cho chẩn đoán kỹ thuật/đẩy thông báo.</li>
                    <li>Chỉ phát hành trên <strong>Android</strong>; hiện không phân phối ở <strong>EU</strong> và <strong>Hoa Kỳ</strong>.</li>
                </ul>
            </div>

            <h2>1. Giới thiệu &amp; phạm vi</h2>
            <p>
                <strong>PlayPing</strong> (Dihaver Tech) cho phép mô phỏng sự cố mạng (mất gói, tăng độ trễ, giới hạn băng thông, ngắt kết nối) để kiểm thử/huấn luyện trong môi trường an toàn trên thiết bị Android. Chính sách này áp dụng cho tất cả người dùng PlayPing trên Android và hiện không áp dụng tại các khu vực ứng dụng chưa phát hành (Liên minh Châu Âu và Hoa Kỳ).
            </p>

            <h2>2. Dữ liệu chúng tôi xử lý</h2>
            <p><strong>Không thu thập dữ liệu cá nhân nhận dạng (PII) và không yêu cầu tài khoản.</strong></p>
            <p>
                Để vận hành ổn định, chúng tôi có thể xử lý <em>dữ liệu kỹ thuật ẩn danh</em> như: thông tin lỗi/crash, hiệu năng, loại thiết bị, phiên bản Android, trạng thái nhận thông báo. Các dữ liệu này chỉ phục vụ chẩn đoán và cải thiện chất lượng, <strong>không nhằm nhận dạng cá nhân</strong> và không dùng cho quảng cáo hành vi.
            </p>

            <h2>3. Mục đích sử dụng dữ liệu</h2>
            <ul>
                <li>Duy trì tính ổn định, khắc phục sự cố và cải thiện hiệu năng.</li>
                <li>Gửi thông báo liên quan đến cập nhật/tính năng (khi bạn cho phép).</li>
                <li>Phân tích xu hướng kỹ thuật để tối ưu trải nghiệm.</li>
            </ul>

            <h2>4. Cách thức hoạt động của VPN mô phỏng</h2>
            <p>
                PlayPing tận dụng <code>Android VpnService</code> để tạo kết nối mô phỏng và áp dụng điều kiện mạng giả lập.
            </p>
            <ul>
                <li>Kết nối VPN chỉ phục vụ mục đích mô phỏng.</li>
                <li>Ứng dụng <strong>không giám sát</strong> hoạt động duyệt web và <strong>không thu thập nội dung lưu lượng</strong>.</li>
                <li>Xử lý được thực hiện cục bộ trên thiết bị. Trong một số trường hợp, khi VPN bật nhưng chưa áp dụng mô phỏng, lưu lượng có thể được <strong>định tuyến tạm thời qua máy chủ trung gian</strong> để tránh gián đoạn; máy chủ này không lưu trữ nội dung, không ghi nhật ký duyệt web, không phân tích dữ liệu.</li>
            </ul>

            <h2>5. Quyền ứng dụng</h2>
            <p>PlayPing chỉ yêu cầu các quyền cần thiết để hoạt động minh bạch và hợp pháp:</p>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Quyền</th>
                            <th>Mục đích</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>INTERNET</code>, <code>ACCESS_NETWORK_STATE</code></td>
                            <td>Kết nối mạng, kiểm tra trạng thái mạng phục vụ mô phỏng/cập nhật.</td>
                        </tr>
                        <tr>
                            <td><code>SYSTEM_ALERT_WINDOW</code></td>
                            <td>Hiển thị cửa sổ nổi/phần tử giao diện phục vụ thao tác nhanh khi mô phỏng.</td>
                        </tr>
                        <tr>
                            <td><code>FOREGROUND_SERVICE</code>, <code>FOREGROUND_SERVICE_SPECIAL_USE</code>, <code>WAKE_LOCK</code></td>
                            <td>Duy trì dịch vụ nền (ví dụ VPN mô phỏng) hoạt động ổn định, hạn chế bị hệ thống dừng.</td>
                        </tr>
                        <tr>
                            <td><code>POST_NOTIFICATIONS</code>, <code>VIBRATE</code></td>
                            <td>Gửi/hiển thị thông báo cập nhật hoặc trạng thái mô phỏng, rung phản hồi.</td>
                        </tr>
                        <tr>
                            <td><code>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code></td>
                            <td>Giảm khả năng hệ thống giới hạn dịch vụ nền quan trọng (VPN mô phỏng).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="hint">PlayPing <strong>không</strong> truy cập nội dung tin nhắn, danh bạ, vị trí, micro hoặc camera.</p>

            <h2>6. Máy chủ &amp; bên xử lý dữ liệu</h2>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Thành phần</th>
                            <th>Mục đích</th>
                            <th>Loại dữ liệu</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Firebase</strong> (ví dụ: Cloud Messaging, Crash/Performance)</td>
                            <td>Thông báo đẩy; chẩn đoán lỗi/hiệu năng; số liệu kỹ thuật ẩn danh.</td>
                            <td>Sự kiện kỹ thuật, loại thiết bị, phiên bản hệ điều hành, trạng thái nhận thông báo.</td>
                            <td>Không dùng để nhận dạng cá nhân; không bán dữ liệu.</td>
                        </tr>
                        <tr>
                            <td><strong>Backend PlayPing</strong></td>
                            <td>Cập nhật nội dung/cấu hình; đẩy thông báo; đảm bảo tính sẵn sàng.</td>
                            <td>Dữ liệu kỹ thuật tạm thời (ví dụ mã tham chiếu ẩn danh, thông tin trạng thái).</td>
                            <td>Không ghi log nội dung lưu lượng; không phân tích hành vi duyệt web.</td>
                        </tr>
                        <tr>
                            <td><strong>Máy chủ trung gian (VPN passthrough)</strong></td>
                            <td>Định tuyến tạm để tránh gián đoạn kết nối khi mô phỏng chưa áp dụng.</td>
                            <td>Chỉ truyền tải gói tin; <em>không</em> lưu nội dung.</td>
                            <td>Không lưu trữ, không ghi nhật ký duyệt web, không chia sẻ dữ liệu.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>7. Chia sẻ dữ liệu</h2>
            <p>
                Chúng tôi <strong>không</strong> bán dữ liệu và không chia sẻ dữ liệu cho mục đích quảng cáo hành vi. Dữ liệu kỹ thuật chỉ được xử lý bởi các nhà cung cấp dịch vụ nêu ở mục 6 nhằm vận hành sản phẩm.
            </p>

            <h2>8. Lưu trữ &amp; bảo mật</h2>
            <ul>
                <li>Áp dụng biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ dữ liệu kỹ thuật khỏi truy cập trái phép.</li>
                <li>Không lưu nội dung lưu lượng mạng và không ghi nhật ký duyệt web ở máy chủ trung gian.</li>
                <li>Khuyến nghị người dùng cập nhật Android và PlayPing lên phiên bản mới nhất.</li>
            </ul>

            <h2>9. Quyền của người dùng</h2>
            <p>
                Vì PlayPing không thu thập dữ liệu cá nhân nhận dạng, các quyền như truy cập/chỉnh sửa/xóa dữ liệu cá nhân nhìn chung <em>không áp dụng</em>. Bạn có thể quản lý thông báo trong phần Cài đặt hệ thống hoặc gỡ cài đặt ứng dụng bất kỳ lúc nào.
            </p>

            <h2>10. Quyền riêng tư của trẻ em</h2>
            <p>PlayPing không hướng tới trẻ em dưới 13 tuổi và không chủ động thu thập dữ liệu từ nhóm người dùng này.</p>

            <h2>11. Khu vực phát hành &amp; tuân thủ</h2>
            <p>
                Ứng dụng hiện không phát hành tại EU và Hoa Kỳ. Chúng tôi vẫn hướng đến việc tuân thủ các chuẩn mực quyền riêng tư phổ biến (minh bạch, tối thiểu hóa dữ liệu, bảo mật hợp lý). Nếu phạm vi phát hành thay đổi, chúng tôi sẽ cập nhật chính sách và thực hiện các nghĩa vụ tuân thủ liên quan (ví dụ cơ sở pháp lý xử lý dữ liệu đối với EU).
            </p>

            <h2>12. Thay đổi Chính sách</h2>
            <p>
                Chúng tôi có thể cập nhật Chính sách này để phản ánh thay đổi về tính năng, dịch vụ hoặc quy định pháp luật. Phiên bản mới sẽ được công bố tại trang này kèm ngày hiệu lực rõ ràng.
            </p>

            <h2>13. Liên hệ</h2>
            <p>Nếu có câu hỏi hoặc yêu cầu, vui lòng liên hệ:</p>
            <p>📩 <a href="mailto:dihaver.studio@gmail.com">dihaver.studio@gmail.com</a></p>`
                }
            },
            terms: {
                meta: {
                    title: 'Điều khoản Dịch vụ',
                    description: 'Điều khoản dịch vụ PlayPing: sử dụng hợp pháp, gói premium, thanh toán, hoàn tiền, giới hạn trách nhiệm, thay đổi điều khoản.',
                    ogTitle: 'Terms of Service – PlayPing',
                    ogDescription: 'Điều khoản dịch vụ PlayPing bao gồm quy định sử dụng, gói premium, thanh toán và miễn trừ trách nhiệm.'
                },
                strings: {
                    pageHeading: 'Điều khoản Dịch vụ',
                    pageUpdated: 'Cập nhật lần cuối: <time datetime="2025-09-28">28/09/2025</time>',
                    termsContent: `<h2>1. Chấp nhận điều khoản</h2>
      <p>Khi bạn tải xuống, cài đặt hoặc sử dụng ứng dụng <strong>PlayPing</strong>, bạn mặc nhiên đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản này. Nếu không đồng ý với bất kỳ nội dung nào, vui lòng ngừng sử dụng và gỡ cài đặt ứng dụng ngay lập tức.</p>

      <h2>2. Giấy phép sử dụng</h2>
      <p>Chúng tôi cấp cho bạn giấy phép cá nhân, giới hạn, không độc quyền và không thể chuyển nhượng để sử dụng PlayPing cho mục đích cá nhân và phi thương mại.</p>
      <p>Bạn không được phép:</p>
      <ul>
        <li>Sao chép, chỉnh sửa, dịch ngược, giải mã hoặc phân phối ứng dụng dưới bất kỳ hình thức nào.</li>
        <li>Khai thác ứng dụng cho mục đích thương mại nếu chưa được chấp thuận bằng văn bản.</li>
        <li>Sử dụng thương hiệu, logo hoặc tài sản trí tuệ của PlayPing khi chưa được phép.</li>
      </ul>

      <h2>3. Dịch vụ trả phí và gói Premium</h2>
      <p>PlayPing cung cấp các gói <strong>Premium</strong> với tính năng mở rộng hoặc nâng cao. Khi mua hoặc đăng ký gói Premium, bạn đồng ý rằng:</p>
      <ul>
        <li>Thanh toán được xử lý thông qua <strong>Google Play Billing</strong> hoặc các phương thức chính thức khác được Google Play hỗ trợ.</li>
        <li>Mức phí, chu kỳ thanh toán và các quyền lợi của gói Premium sẽ được hiển thị rõ trên màn hình trước khi bạn xác nhận mua.</li>
        <li>Quy trình hủy, đổi hoặc hoàn tiền (nếu áp dụng) tuân theo <strong>Chính sách hoàn tiền của Google Play</strong>. Vui lòng tham khảo hướng dẫn tại <a href="https://support.google.com/googleplay/answer/2479637?hl=vi" target="_blank" rel="noopener">Google Play Help</a>.</li>
        <li>Mọi khoản phí có thể được thay đổi nhưng sẽ được thông báo công khai trong ứng dụng hoặc trên Google Play trước khi áp dụng cho kỳ thanh toán tiếp theo.</li>
        <li>Bạn chịu trách nhiệm cho mọi khoản phí liên quan đến tài khoản Google Play của mình, kể cả trong trường hợp thiết bị bị mất hoặc tài khoản bị truy cập trái phép, trừ khi pháp luật quy định khác.</li>
      </ul>

      <h2>4. Quyền và nghĩa vụ của người dùng</h2>
      <p>Khi sử dụng PlayPing (bao gồm cả gói Premium), bạn cam kết:</p>
      <ul>
        <li>Chỉ sử dụng ứng dụng đúng với mục đích và chức năng đã thiết kế.</li>
        <li>Không can thiệp hoặc tìm cách can thiệp vào mã nguồn, cơ sở hạ tầng hoặc hệ thống vận hành của ứng dụng.</li>
        <li>Không dùng ứng dụng cho hành vi vi phạm pháp luật, gây hại cho bên thứ ba hoặc xâm phạm quyền sở hữu trí tuệ, quyền riêng tư của người khác.</li>
        <li>Tự chịu trách nhiệm về mọi hoạt động phát sinh từ việc cài đặt, mua gói Premium và sử dụng ứng dụng trên thiết bị của bạn.</li>
      </ul>

      <h2>5. Giới hạn và miễn trừ trách nhiệm</h2>
      <p>PlayPing được cung cấp theo nguyên tắc “nguyên trạng” (<em>as is</em>) mà không kèm bảo đảm nào về hiệu suất, độ ổn định hoặc tính phù hợp cho một mục đích cụ thể.</p>
      <ul>
        <li>Chúng tôi không chịu trách nhiệm đối với thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hay hệ quả do việc sử dụng hoặc không thể sử dụng ứng dụng, kể cả dịch vụ Premium.</li>
        <li>Người dùng chịu trách nhiệm về thiết bị, kết nối mạng và mọi chi phí liên quan đến việc sử dụng ứng dụng và gói Premium.</li>
      </ul>

      <h2>6. Thay đổi dịch vụ và giá</h2>
      <p>Chúng tôi có thể thay đổi, tạm ngừng hoặc ngừng cung cấp một phần hoặc toàn bộ dịch vụ (bao gồm gói Premium) bất kỳ lúc nào để đáp ứng yêu cầu pháp luật, cải tiến kỹ thuật hoặc nhu cầu kinh doanh. Nếu có thay đổi về phí dịch vụ Premium, chúng tôi sẽ thông báo trước trên ứng dụng hoặc Google Play.</p>

      <h2>7. Sửa đổi điều khoản</h2>
      <p>Điều khoản này có thể được cập nhật để phản ánh thay đổi về tính năng, mô hình thanh toán hoặc quy định pháp luật. Phiên bản mới sẽ được công bố tại trang này kèm ngày hiệu lực. Việc tiếp tục sử dụng ứng dụng hoặc gói Premium đồng nghĩa với việc bạn chấp nhận các thay đổi đó.</p>

      <h2>8. Luật áp dụng</h2>
      <p>Điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam, trừ khi pháp luật nơi bạn cư trú bắt buộc áp dụng quy định khác.</p>

      <h2>9. Liên hệ</h2>
      <p>Mọi câu hỏi, phản hồi hoặc thắc mắc liên quan đến Điều khoản dịch vụ hoặc thanh toán, vui lòng liên hệ:</p>
      <p>📩 <a href="mailto:dihaver.studio@gmail.com">dihaver.studio@gmail.com</a></p>`
                }
            },
            feedback: {
                meta: {
                    title: 'Góp ý &amp; Báo lỗi',
                    description: 'Gửi góp ý, báo lỗi hoặc yêu cầu tính năng cho PlayPing.',
                    ogTitle: 'Feedback — PlayPing',
                    ogDescription: 'Gửi góp ý, báo lỗi hoặc yêu cầu tính năng cho PlayPing.'
                },
                strings: {
                    pageHeading: 'Góp ý &amp; Báo lỗi',
                    pageIntro: 'Hãy mô tả vấn đề hoặc ý tưởng của bạn. Chúng tôi đọc hết mọi phản hồi ❤️',
                    feedbackTypeLabel: 'Loại phản hồi *',
                    feedbackTypeBug: 'Báo lỗi',
                    feedbackTypeFeature: 'Yêu cầu tính năng',
                    feedbackTypeOther: 'Khác',
                    feedbackSeverityLabel: 'Mức độ (khi là lỗi)',
                    feedbackSeverityPlaceholder: '—',
                    feedbackSeverityLow: 'Thấp',
                    feedbackSeverityMedium: 'Trung bình',
                    feedbackSeverityHigh: 'Cao',
                    feedbackTitleLabel: 'Tiêu đề *',
                    feedbackTitlePlaceholder: 'VD: Không bật được VPN',
                    feedbackDescriptionLabel: 'Mô tả chi tiết *',
                    feedbackDescriptionPlaceholder: 'Mô tả bước tái hiện, thông báo lỗi, kỳ vọng...',
                    feedbackHoneypotLabel: 'Website',
                    feedbackSubmitLabel: 'Gửi phản hồi',
                    feedbackStatusIdle: '',
                    feedbackSubmitting: 'Đang chuẩn bị email...',
                    feedbackSubmitSuccess: 'Đã mở ứng dụng email của bạn. Vui lòng kiểm tra và nhấn Gửi trong email ✉️',
                    feedbackSubmitFailure: 'Không mở được ứng dụng email. Vui lòng gửi email tới dihaver.studio@gmail.com',
                    feedbackBotDetected: 'Phát hiện bot.',
                    feedbackSubjectPrefix: 'Phản hồi',
                    feedbackSubjectBug: 'Báo lỗi',
                    feedbackSubjectFeature: 'Yêu cầu tính năng',
                    feedbackSubjectOther: 'Khác',
                    feedbackValidationError: 'Vui lòng kiểm tra lại các trường được đánh dấu.',
                    feedbackErrorRequired: 'Trường này là bắt buộc.',
                    feedbackErrorTooShort: min => `Cần ít nhất ${min} ký tự.`,
                    feedbackErrorTooLong: max => `Tối đa ${max} ký tự.`,
                    feedbackErrorInvalid: 'Giá trị không hợp lệ.',
                    feedbackErrorSeverityRequired: 'Vui lòng chọn mức độ lỗi.',
                    feedbackTrimmedNote: '(ĐÃ RÚT GỌN)'
                }
            },
            notFound: {
                meta: {
                    title: 'Không tìm thấy',
                    description: 'Trang bạn tìm không tồn tại. Quay về PlayPing.',
                    ogTitle: '404 – Không tìm thấy trang',
                    ogDescription: 'Trang bạn tìm không tồn tại. Quay về PlayPing.'
                },
                strings: {
                    notFoundHeading: 'Ôi, trang bạn tìm không tồn tại.',
                    notFoundCta: 'Về trang chủ'
                }
            },
            vpnBlock: {
                meta: {
                    title: 'Phiên bản không được hỗ trợ',
                    description: 'Thông báo PlayPing: bạn đang sử dụng phiên bản không chính thức hoặc đã lỗi thời. Vui lòng cập nhật qua Google Play để tiếp tục dùng dịch vụ an toàn.',
                    ogTitle: 'Phiên bản không được hỗ trợ – PlayPing',
                    ogDescription: 'PlayPing phát hiện bạn đang sử dụng bản cài đặt không chính thức hoặc đã lỗi thời. Hãy tải lại từ Google Play để tiếp tục trải nghiệm an toàn.'
                },
                strings: {
                    vpnBadge: 'Thông báo bảo vệ người dùng',
                    vpnHeading: 'Phiên bản PlayPing của bạn không được hỗ trợ',
                    vpnIntro: 'Chúng tôi phát hiện bản PlayPing bạn đang sử dụng không phải phát hành chính thức trên Google Play hoặc đã quá cũ nên không còn tương thích. Để bảo đảm dữ liệu cá nhân và chất lượng dịch vụ, các bản dựng như vậy bị chặn truy cập cho đến khi được cập nhật.',
                    vpnWhyTitle: 'Vì sao chúng tôi chặn phiên bản này?',
                    vpnWhyList: `<li>Các bản cài đặt không chính thức có thể đã bị thay đổi, tiềm ẩn rủi ro bảo mật và gây mất an toàn.</li>
          <li>Những bản build thử nghiệm hoặc phát hành nội bộ không bảo đảm độ ổn định, dễ gây lỗi khi kết nối và làm gián đoạn trải nghiệm.</li>
          <li>Phiên bản quá cũ không còn đáp ứng yêu cầu kỹ thuật mới của PlayPing.</li>`,
                    vpnFixTitle: 'Cách khắc phục',
                    vpnFixSteps: `<li>Gỡ cài đặt bản PlayPing hiện tại khỏi thiết bị.</li>
          <li>Mở <strong>Google Play Store</strong> và tìm "PlayPing" hoặc truy cập trực tiếp liên kết dưới đây.</li>
          <li>Cài đặt lại ứng dụng từ nhà phát hành <strong>Dihaver Tech</strong>.</li>
          <li>Đăng nhập và sử dụng bình thường. Mọi gói Premium hợp lệ sẽ được khôi phục tự động.</li>`,
                    vpnFixCta: 'Tải PlayPing trên Google Play',
                    vpnHelpTitle: 'Cần hỗ trợ thêm?',
                    vpnHelpDescription: 'Nếu bạn tin rằng đây là nhầm lẫn hoặc cần hỗ trợ, vui lòng liên hệ đội ngũ PlayPing để được kiểm tra và hướng dẫn chi tiết.',
                    vpnHelpEmail: 'dihaver.studio@gmail.com'
                }
            }
        }
    },
    en: {
        common: {
            brandName: 'PlayPing',
            headerPlayBadgeAlt: 'Get it on Google Play',
            headerPlayBadgeSrc: 'https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png',
            footerPrivacy: 'Privacy',
            footerTerms: 'Terms',
            footerContact: 'Contact',
            backToHome: 'Back to homepage',
        },
        pages: {
            home: {
                meta: {
                    title: 'PlayPing – Android network simulator',
                    description: 'PlayPing lets you simulate network issues (packet loss, latency, bandwidth limits, disconnects) to test and train on Android.',
                    ogTitle: 'PlayPing – Simulate Android network issues',
                    ogDescription: 'PlayPing helps you simulate packet loss, latency spikes, bandwidth throttling, or disconnects to test and train apps and games on Android.',
                    schemaDescription: 'PlayPing helps you simulate network issues (packet loss, latency, bandwidth limits, disconnects) for testing and training directly on Android.'
                },
                strings: {
                    heroHeading: 'Simulate network issues <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">right on Android</span>',
                    heroSubheading: 'Recreate packet loss, latency spikes, throttled bandwidth, or dropped connections so you can test apps, games, and practice under real-world network conditions.',
                    heroSecondaryCta: 'Explore features',
                    featuresTitle: 'Highlighted features',
                    featuresSubtitle: 'Experience fast, intuitive, and safe network simulation.',
                    feature1Title: 'Floating bubble',
                    feature1Description: 'Control every simulation mode instantly from a floating bubble overlay.',
                    feature2Title: 'Realistic scenarios',
                    feature2Description: 'Recreate familiar network situations—lag, jitter, disconnections—to QA your apps and games.',
                    feature3Title: 'Advanced controls',
                    feature3Description: 'Fine-tune delay, jitter, loss, and bandwidth to match your testing scenarios.',
                    feature4Title: 'Safe &amp; private',
                    feature4Description: 'No personal data collection. Simulations run locally through a secure VPN.',
                    screensTitle: 'Screenshots',
                    screensSubtitle: 'Key PlayPing interfaces at a glance.',
                    headerPlayBadgeAlt: 'Get it on Google Play',
                    heroPlayBadgeAlt: 'Get it on Google Play',
                    heroPlayBadgeSrc: 'https://play.google.com/intl/en/badges/static/images/badges/en_badge_web_generic.png'
                }
            },
            privacy: {
                meta: {
                    title: 'Privacy Policy',
                    description: 'PlayPing does not collect personally identifiable data. It relies on Android VpnService for simulation and may temporarily route traffic through intermediary servers (no logging). Firebase and our backend only process technical data for updates and notifications.',
                    ogTitle: 'Privacy Policy – PlayPing',
                    ogDescription: 'PlayPing does not collect personally identifiable data; it uses Android VpnService for simulations. Firebase and our backend only process technical signals for operations and notifications.'
                },
                strings: {
                    pageHeading: 'Privacy Policy',
                    pageUpdated: 'Last updated: <time datetime="2025-09-28">September 28, 2025</time>',
                    privacyContent: `<div class="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
                <h3 class="m-0 text-lg font-semibold">Quick summary</h3>
                <ul class="mt-3">
                    <li><strong>No personally identifiable information (PII) is collected.</strong> No account required.</li>
                    <li>Uses <code>Android VpnService</code> to simulate networks; processing happens <strong>locally on-device</strong>.</li>
                    <li>Traffic may be temporarily routed through an intermediary server to keep the tunnel alive; <strong>no content is logged</strong>.</li>
                    <li><strong>Firebase</strong> and the <strong>PlayPing backend</strong> power diagnostics and notifications.</li>
                    <li>Available on <strong>Android</strong> only; not currently distributed in the <strong>EU</strong> or <strong>United States</strong>.</li>
                </ul>
            </div>

            <h2>1. Introduction &amp; scope</h2>
            <p>
                <strong>PlayPing</strong> (Dihaver Tech) lets you simulate network issues (packet loss, latency spikes, throttling, disconnects) so you can test and train safely on Android devices. This policy covers all PlayPing users on Android and excludes regions where the app is not released (European Union and United States).
            </p>

            <h2>2. Data we process</h2>
            <p><strong>No personally identifiable information (PII) is collected, and no account is required.</strong></p>
            <p>
                To keep the service stable, we may process <em>anonymous technical data</em> such as crash/error logs, performance signals, device model, Android version, and notification opt-in status. These signals are used solely for diagnostics and product improvements, <strong>not for personal profiling</strong> or behavioral ads.
            </p>

            <h2>3. Why we use data</h2>
            <ul>
                <li>Maintain stability, troubleshoot issues, and improve performance.</li>
                <li>Send update or feature notifications when you opt in.</li>
                <li>Analyze technical trends to optimize the experience.</li>
            </ul>

            <h2>4. How the simulated VPN works</h2>
            <p>
                PlayPing uses <code>Android VpnService</code> to create a simulation tunnel and apply network conditions.
            </p>
            <ul>
                <li>The VPN tunnel is used strictly for simulation.</li>
                <li>The app <strong>does not monitor</strong> browsing activity and <strong>does not capture traffic content</strong>.</li>
                <li>Processing happens on-device. When the VPN is enabled but no scenario is active, traffic may be <strong>temporarily routed through an intermediary server</strong> to avoid disruptions; that server does not store content, log browsing, or analyze data.</li>
            </ul>

            <h2>5. App permissions</h2>
            <p>PlayPing only requests the permissions it needs to run transparently and lawfully:</p>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Permission</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>INTERNET</code>, <code>ACCESS_NETWORK_STATE</code></td>
                            <td>Network connectivity and status checks for simulations/updates.</td>
                        </tr>
                        <tr>
                            <td><code>SYSTEM_ALERT_WINDOW</code></td>
                            <td>Show floating UI components for quick simulation actions.</td>
                        </tr>
                        <tr>
                            <td><code>FOREGROUND_SERVICE</code>, <code>FOREGROUND_SERVICE_SPECIAL_USE</code>, <code>WAKE_LOCK</code></td>
                            <td>Keep the simulation service stable in the background.</td>
                        </tr>
                        <tr>
                            <td><code>POST_NOTIFICATIONS</code>, <code>VIBRATE</code></td>
                            <td>Display simulation status updates and provide haptic feedback.</td>
                        </tr>
                        <tr>
                            <td><code>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code></td>
                            <td>Reduce the chance Android throttles critical VPN services.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="hint">PlayPing <strong>never</strong> accesses messages, contacts, location, microphone, or camera data.</p>

            <h2>6. Infrastructure &amp; processors</h2>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Purpose</th>
                            <th>Data type</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Firebase</strong> (e.g., Cloud Messaging, Crash/Performance)</td>
                            <td>Push notifications; crash/performance diagnostics; anonymous technical metrics.</td>
                            <td>Technical events, device model, OS version, notification opt-in state.</td>
                            <td>No personal identification; no data sales.</td>
                        </tr>
                        <tr>
                            <td><strong>PlayPing backend</strong></td>
                            <td>Serve content/config updates; deliver notifications; ensure availability.</td>
                            <td>Temporary technical metadata (e.g., anonymous reference tokens, status info).</td>
                            <td>No traffic logging; no browsing analytics.</td>
                        </tr>
                        <tr>
                            <td><strong>Intermediary server (VPN passthrough)</strong></td>
                            <td>Temporary routing to avoid disruptions before simulations apply.</td>
                            <td>Transit packets only; <em>no</em> content storage.</td>
                            <td>No storage, no browsing logs, no sharing.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>7. Data sharing</h2>
            <p>
                We <strong>never</strong> sell data or share it for behavioral advertising. Technical signals are processed only by the providers listed in section 6 to operate the product.
            </p>

            <h2>8. Storage &amp; security</h2>
            <ul>
                <li>Apply reasonable technical and organizational safeguards against unauthorized access.</li>
                <li>No traffic content is stored or logged on intermediary servers.</li>
                <li>We encourage users to keep Android and PlayPing up to date.</li>
            </ul>

            <h2>9. User rights</h2>
            <p>
                Because PlayPing does not collect PII, rights such as access/correction/deletion generally <em>do not apply</em>. You can manage notifications in system settings or uninstall the app at any time.
            </p>

            <h2>10. Children&apos;s privacy</h2>
            <p>PlayPing is not directed at children under 13 and does not knowingly collect data from them.</p>

            <h2>11. Regions &amp; compliance</h2>
            <p>
                The app is not currently distributed in the EU or United States. We still aim to follow common privacy principles (transparency, data minimization, reasonable security). If distribution expands, we will update the policy and meet any required compliance obligations (for example, legal bases for EU data processing).
            </p>

            <h2>12. Policy updates</h2>
            <p>
                We may update this Policy to reflect feature changes, service adjustments, or legal requirements. New versions will be published here with a clear effective date.
            </p>

            <h2>13. Contact</h2>
            <p>If you have questions or requests, contact us at:</p>
            <p>📩 <a href="mailto:dihaver.studio@gmail.com">dihaver.studio@gmail.com</a></p>`
                }
            },
            terms: {
                meta: {
                    title: 'Terms of Service',
                    description: 'PlayPing Terms of Service: lawful usage, premium plans, billing, refunds, liability limits, and policy changes.',
                    ogTitle: 'Terms of Service – PlayPing',
                    ogDescription: 'The PlayPing Terms cover usage guidelines, premium plans, billing policies, and liability limitations.'
                },
                strings: {
                    pageHeading: 'Terms of Service',
                    pageUpdated: 'Last updated: <time datetime="2025-09-28">September 28, 2025</time>',
                    termsContent: `<h2>1. Acceptance</h2>
      <p>By downloading, installing, or using <strong>PlayPing</strong>, you agree to be bound by these Terms. If you disagree with any part, uninstall and stop using the app immediately.</p>

      <h2>2. License</h2>
      <p>We grant you a personal, limited, non-exclusive, non-transferable license to use PlayPing for personal, non-commercial purposes.</p>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, reverse engineer, decompile, or distribute the app in any form.</li>
        <li>Commercialize the app without written approval.</li>
        <li>Use PlayPing trademarks, logos, or intellectual property without permission.</li>
      </ul>

      <h2>3. Premium plans</h2>
      <p>PlayPing offers <strong>Premium</strong> tiers with additional or advanced features. When purchasing or subscribing, you agree that:</p>
      <ul>
        <li>Payments are processed through <strong>Google Play Billing</strong> or other official Google Play payment methods.</li>
        <li>Pricing, billing cycles, and entitlements are shown clearly before you confirm the purchase.</li>
        <li>Cancellations, changes, or refunds (when available) follow <strong>Google Play&apos;s refund policy</strong>. See <a href="https://support.google.com/googleplay/answer/2479637?hl=en" target="_blank" rel="noopener">Google Play Help</a>.</li>
        <li>Fees may change, but any changes will be announced in the app or on Google Play before your next billing cycle.</li>
        <li>You are responsible for all charges tied to your Google Play account, even if your device is lost or your account is accessed without permission, unless local law states otherwise.</li>
      </ul>

      <h2>4. User responsibilities</h2>
      <p>When using PlayPing (including Premium), you agree to:</p>
      <ul>
        <li>Use the app only as designed.</li>
        <li>Not interfere with or attempt to disrupt the app&apos;s code, infrastructure, or operations.</li>
        <li>Avoid any illegal activity, harm to third parties, or infringement of intellectual property or privacy rights.</li>
        <li>Remain accountable for all activity stemming from installing, purchasing, or using the app on your device.</li>
      </ul>

      <h2>5. Disclaimer &amp; liability</h2>
      <p>PlayPing is provided “as is” without warranties of performance, stability, or fitness for a particular purpose.</p>
      <ul>
        <li>We are not liable for direct, indirect, incidental, or consequential damages arising from use or inability to use the app, including Premium services.</li>
        <li>You are responsible for your device, network connectivity, and costs associated with using the app or Premium services.</li>
      </ul>

      <h2>6. Service and pricing changes</h2>
      <p>We may modify, suspend, or discontinue any part of the service (including Premium) at any time to meet legal requirements, technical needs, or business objectives. If Premium pricing changes, we will provide prior notice in the app or on Google Play.</p>

      <h2>7. Updates to these Terms</h2>
      <p>We may update these Terms to reflect product changes, billing adjustments, or legal requirements. New versions will be posted here with an effective date. Continuing to use the app or Premium services means you accept the changes.</p>

      <h2>8. Governing law</h2>
      <p>These Terms are governed by the laws of Vietnam unless mandatory local laws require otherwise.</p>

      <h2>9. Contact</h2>
      <p>For questions about these Terms or billing, contact us at:</p>
      <p>📩 <a href="mailto:dihaver.studio@gmail.com">dihaver.studio@gmail.com</a></p>`
                }
            },
            feedback: {
                meta: {
                    title: 'Feedback &amp; Support',
                    description: 'Send feedback, report bugs, or request features for PlayPing.',
                    ogTitle: 'Feedback — PlayPing',
                    ogDescription: 'Send feedback, report bugs, or request features for PlayPing.'
                },
                strings: {
                    pageHeading: 'Feedback &amp; Support',
                    pageIntro: 'Tell us about your issue or idea. We read every message ❤️',
                    feedbackTypeLabel: 'Feedback type *',
                    feedbackTypeBug: 'Bug report',
                    feedbackTypeFeature: 'Feature request',
                    feedbackTypeOther: 'Other',
                    feedbackSeverityLabel: 'Severity (for bugs)',
                    feedbackSeverityPlaceholder: '—',
                    feedbackSeverityLow: 'Low',
                    feedbackSeverityMedium: 'Medium',
                    feedbackSeverityHigh: 'High',
                    feedbackTitleLabel: 'Subject *',
                    feedbackTitlePlaceholder: 'E.g. Cannot enable VPN',
                    feedbackDescriptionLabel: 'Detailed description *',
                    feedbackDescriptionPlaceholder: 'Explain the steps, error messages, expected outcome...',
                    feedbackHoneypotLabel: 'Website',
                    feedbackSubmitLabel: 'Send feedback',
                    feedbackStatusIdle: '',
                    feedbackSubmitting: 'Preparing your email...',
                    feedbackSubmitSuccess: 'Your email app has opened. Review it and press Send ✉️',
                    feedbackSubmitFailure: 'Unable to launch your email app. Please email dihaver.studio@gmail.com',
                    feedbackBotDetected: 'Bot detected.',
                    feedbackSubjectPrefix: 'Feedback',
                    feedbackSubjectBug: 'Bug',
                    feedbackSubjectFeature: 'Feature request',
                    feedbackSubjectOther: 'Other',
                    feedbackValidationError: 'Please review the highlighted fields.',
                    feedbackErrorRequired: 'This field is required.',
                    feedbackErrorTooShort: min => `At least ${min} characters required.`,
                    feedbackErrorTooLong: max => `Maximum ${max} characters allowed.`,
                    feedbackErrorInvalid: 'Invalid value.',
                    feedbackErrorSeverityRequired: 'Select a severity level.',
                    feedbackTrimmedNote: '(TRUNCATED)'
                }
            },
            notFound: {
                meta: {
                    title: 'Page not found',
                    description: 'The page you requested could not be found. Head back to PlayPing.',
                    ogTitle: '404 – Page not found',
                    ogDescription: 'The page you requested could not be found. Head back to PlayPing.'
                },
                strings: {
                    notFoundHeading: 'Oops, the page you were looking for does not exist.',
                    notFoundCta: 'Back to homepage'
                }
            },
            vpnBlock: {
                meta: {
                    title: 'Unsupported version',
                    description: 'PlayPing detected an unofficial or outdated build. Please reinstall from Google Play to stay safe.',
                    ogTitle: 'Unsupported version – PlayPing',
                    ogDescription: 'PlayPing detected an unofficial or outdated installation. Reinstall from Google Play to continue safely.'
                },
                strings: {
                    vpnBadge: 'User protection notice',
                    vpnHeading: 'Your PlayPing build is not supported',
                    vpnIntro: 'We detected that this PlayPing build is either unofficial or too old to remain compatible. To protect your data and ensure quality, these builds are blocked until you update.',
                    vpnWhyTitle: 'Why this build is blocked',
                    vpnWhyList: `<li>Unofficial packages may have been modified and could expose you to security risks.</li>
          <li>Test or internal builds are unstable, often breaking connectivity and interrupting your experience.</li>
          <li>Older releases may no longer meet PlayPing&apos;s technical requirements.</li>`,
                    vpnFixTitle: 'How to fix it',
                    vpnFixSteps: `<li>Uninstall the current PlayPing build from your device.</li>
          <li>Open the <strong>Google Play Store</strong> and search for "PlayPing" or use the link below.</li>
          <li>Reinstall the app from <strong>Dihaver Tech</strong>.</li>
          <li>Sign in and continue as normal. Any valid Premium plan will restore automatically.</li>`,
                    vpnFixCta: 'Get PlayPing on Google Play',
                    vpnHelpTitle: 'Need more help?',
                    vpnHelpDescription: 'If you believe this is a mistake or need assistance, contact the PlayPing team for verification and guidance.',
                    vpnHelpEmail: 'dihaver.studio@gmail.com'
                }
            }
        }
    }
};

if (document.body && document.body.hasAttribute('data-i18n-root')) {
    const detectedLocale = detectLocale();
    const pathLocale = getLocaleFromPath();
    const pageKey = document.body.dataset.i18nPage;

    if (pageKey && pageKey !== 'notFound') {
        const slug = PAGE_SLUGS[pageKey] || '';
        const isHome = !slug;
        const targetLocale = supportedLocales.includes(detectedLocale) ? detectedLocale : FALLBACK_LOCALE;
        const expectedPath = buildLocalePath(targetLocale, slug);
        if (expectedPath) {
            const currentPath = window.location.pathname;
            if (!pathsEqual(currentPath, expectedPath, isHome)) {
                const nextUrl = expectedPath + window.location.search + window.location.hash;
                window.location.replace(nextUrl);
                return;
            }
        }
    }

    const localeToUse = supportedLocales.includes(pathLocale) ? pathLocale : detectedLocale;
    applyTranslations(localeToUse || FALLBACK_LOCALE);
}

function detectLocale() {
    const browserLocales = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const lang of browserLocales) {
        if (!lang) continue;
        const normalized = lang.toLowerCase();
        for (const supported of supportedLocales) {
            if (normalized.startsWith(supported)) {
                return supported;
            }
        }
    }
    return FALLBACK_LOCALE;
}

function getLocaleFromPath() {
    const segments = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/');
    const candidate = segments[0];
    if (candidate && supportedLocales.includes(candidate)) {
        return candidate;
    }
    return null;
}

function buildLocalePath(locale, slug) {
    if (!locale || !supportedLocales.includes(locale)) return '';
    const cleanSlug = (slug || '').replace(/^\/+/, '');
    if (!cleanSlug) {
        return `/${locale}/`;
    }
    return `/${locale}/${cleanSlug}`;
}

function pathsEqual(current, expected, isHome) {
    if (isHome) {
        const normalize = value => (value.endsWith('/') ? value : `${value}/`);
        return normalize(current) === normalize(expected);
    }
    const normalize = value => (value.endsWith('/') ? value.slice(0, -1) : value);
    return normalize(current) === normalize(expected);
}

function slugForRoute(routeKey) {
    if (!routeKey || routeKey === 'home') {
        return '';
    }
    if (PAGE_SLUGS[routeKey]) {
        return PAGE_SLUGS[routeKey];
    }
    return '';
}

function applyTranslations(locale) {
    const pageKey = document.body.dataset.i18nPage;
    if (!pageKey) return;

    const localeData = translations[locale] || translations[FALLBACK_LOCALE];
    const fallbackData = translations[FALLBACK_LOCALE];

    const localePage = localeData.pages?.[pageKey] || {};
    const fallbackPage = fallbackData.pages?.[pageKey] || {};

    const meta = { ...(fallbackPage.meta || {}), ...(localePage.meta || {}) };
    const strings = {
        ...(fallbackData.common || {}),
        ...(fallbackPage.strings || {}),
        ...(localeData.common || {}),
        ...(localePage.strings || {})
    };

    document.documentElement.setAttribute('lang', locale);

    if (meta.title) {
        document.title = meta.title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && meta.description) {
        metaDescription.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.ogTitle) {
        ogTitle.setAttribute('content', meta.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && meta.ogDescription) {
        ogDescription.setAttribute('content', meta.ogDescription);
    }

    if (pageKey && pageKey !== 'notFound') {
        const slug = PAGE_SLUGS[pageKey] || '';
        const canonicalPath = buildLocalePath(locale, slug);
        const canonicalUrl = canonicalPath ? SITE_ORIGIN + canonicalPath : null;
        if (canonicalUrl) {
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
                canonicalLink.setAttribute('href', canonicalUrl);
            }
            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) {
                ogUrl.setAttribute('content', canonicalUrl);
            }
            const hreflangLinks = document.querySelectorAll('link[data-i18n-hreflang]');
            hreflangLinks.forEach(link => {
                const localeKey = link.dataset.i18nHreflang;
                const targetPath = buildLocalePath(localeKey, slug);
                if (targetPath) {
                    link.setAttribute('href', SITE_ORIGIN + targetPath);
                }
            });
        }
    }

    const schemaScript = document.querySelector('script[type="application/ld+json"][data-i18n-schema]');
    if (schemaScript && meta.schemaDescription) {
        try {
            const schemaData = JSON.parse(schemaScript.textContent);
            schemaData.description = meta.schemaDescription;
            schemaScript.textContent = JSON.stringify(schemaData);
        } catch (error) {
            console.warn('Failed to update schema translation', error);
        }
    }

    const translatableElements = document.querySelectorAll('[data-i18n], [data-i18n-alt], [data-i18n-src], [data-i18n-placeholder], [data-i18n-value]');
    translatableElements.forEach((el) => {
        const key = el.dataset.i18n;
        if (key && Object.prototype.hasOwnProperty.call(strings, key)) {
            const baseValue = strings[key];
            if (typeof baseValue !== 'function') {
                const type = el.dataset.i18nType;
                if (type === 'html') {
                    el.innerHTML = baseValue;
                } else {
                    el.textContent = baseValue;
                }
            }
        }

        Object.entries(el.dataset).forEach(([dataKey, value]) => {
            if (!dataKey.startsWith('i18n') || dataKey === 'i18n' || dataKey === 'i18nType') return;
            if (!Object.prototype.hasOwnProperty.call(strings, value)) return;
            const translationValue = strings[value];
            if (typeof translationValue === 'function') return;
            const attributeName = dataKey.slice(4);
            if (!attributeName) return;
            const normalizedAttribute = attributeName.charAt(0).toLowerCase() + attributeName.slice(1);
            el.setAttribute(normalizedAttribute, translationValue);
        });
    });

    const routeElements = document.querySelectorAll('[data-i18n-route]');
    routeElements.forEach(el => {
        const routeKey = el.dataset.i18nRoute;
        const slug = slugForRoute(routeKey);
        const path = buildLocalePath(locale, slug);
        if (path) {
            el.setAttribute('href', path);
        }
    });

    window.__playPingI18n = { locale, page: pageKey, strings, meta };
}
