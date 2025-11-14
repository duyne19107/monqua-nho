// Chờ cho toàn bộ trang web được tải
window.addEventListener('load', function() {
    
    // Lấy các phần tử (elements) từ HTML
    const splashScreen = document.getElementById('splash-screen');
    const heroBanner = document.getElementById('hero-banner');
    const mainContent = document.getElementById('main-content');
    const openButton = document.querySelector('.cta-button');
    const birthdaySong = document.getElementById('birthday-song');

    // 1. Xử lý Màn hình chờ (Splash Screen)
    // Đặt thời gian chờ là 3 giây (3000 milliseconds)
    setTimeout(function() {
        // Làm mờ và ẩn màn hình chờ
        splashScreen.style.opacity = '0';
        
        // Sau khi mờ xong (0.5 giây), thì ẩn hẳn và hiện Bìa thiệp
        setTimeout(function() {
            splashScreen.style.display = 'none';
            // Hiển thị bìa thiệp (Phần 2)
            heroBanner.classList.remove('hidden');

            startSlideshow(); // Bắt đầu slideshow ngay khi bìa thiệp hiện ra

        }, 500); // 500ms này phải khớp với 'transition: opacity 0.5s' trong CSS

    }, 3000); // 3000ms = 3 giây

    // 2. Xử lý Nút "Nhấn vào đây để mở thiệp!"
    // 2. Xử lý Nút "Nhấn vào đây để mở thiệp!"
openButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
    birthdaySong.playbackRate = 1.3;
    // Hiển thị nội dung chính (Phần 3, 4, 5)
    mainContent.classList.remove('hidden');

    // Cuộn mượt mà xuống phần lời chúc
    document.getElementById('loi-chuc').scrollIntoView({
        behavior: 'smooth'
    });

    // --- THÊM KHỐI MÃ NÀY VÀO ---
    // Khi người dùng nhấp, chúng ta BẮT ĐẦU phát nhạc
    if (birthdaySong) {
        birthdaySong.play().catch(error => {
            // Ghi lại lỗi nếu trình duyệt vẫn chặn, nhưng không làm hỏng trang
            console.warn("Lỗi tự động phát âm thanh:", error);
        });
    }
    // -----------------------------
});
/* ========================================
* PHẦN 3: XỬ LÝ SLIDESHOW TỰ ĐỘNG
 * ========================================
 */

let currentSlideIndex = 0; // Biến để theo dõi ảnh hiện tại
let slideInterval; // Biến để giữ bộ đếm thời gian

// Lấy tất cả các ảnh trong gallery
const slides = document.querySelectorAll('.gallery img');

function startSlideshow() {
    // Kiểm tra xem có ảnh nào không
    if (slides.length > 0) {
        // Hiển thị ảnh đầu tiên ngay lập tức (thêm class .active)
        slides[0].classList.add('active');
        
        // Đặt thời gian tự động chuyển ảnh.
        // 4000ms = 4 giây. Bạn có thể đổi thành 3000 (3 giây) nếu muốn nhanh hơn.
        slideInterval = setInterval(nextSlide, 4000);
    }
}

function nextSlide() {
    // 1. Ẩn ảnh hiện tại (gỡ class .active)
    slides[currentSlideIndex].classList.remove('active');
    
    // 2. Tính toán index (vị trí) của ảnh tiếp theo
    // Phép toán % (modulo) giúp nó tự động quay về 0 khi đến ảnh cuối cùng
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // 3. Hiển thị ảnh tiếp theo (thêm class .active)
    slides[currentSlideIndex].classList.add('active');
}
});