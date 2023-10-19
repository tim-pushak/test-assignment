document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.image-slider', {
        slideToClickedSlide: true,
        hashNavigation:{
            watchState: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        autoHeight: true,
        slidesPerView: 2,
        watchOverFlow: true,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        loopedSlides: 2,

        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            480: {
                slidesPerView: 1.5,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });

    swiper.on('slideChange', function () {
        // Знімаємо клас "active" з усіх слайдів
        const slides = document.querySelectorAll('.image-slider__slide');
        slides.forEach(function (slide) {
            slide.classList.remove('active');
        });

        // Додаємо клас "active" до активного слайда
        const activeSlide = slides[swiper.realIndex];
        activeSlide.classList.add('active');
    });
});
