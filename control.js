// Đợi HTML tải xong mới chạy code
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', function() {
            menuLinks.classList.toggle('active');
            console.log("Đã bấm vào menu!"); // Dòng này để bạn kiểm tra trong F12 Console
        });
    }
});1