var testimonialSwiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});