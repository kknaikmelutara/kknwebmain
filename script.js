document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var rootElement = document.documentElement;

    function handleScroll() {
        // Menampilkan tombol jika scroll lebih dari 300px
        if (rootElement.scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    function scrollToTop() {
        // Menggulirkan ke atas halaman
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', handleScroll);
});
