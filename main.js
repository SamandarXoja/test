const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // На мобильных устройствах показываем 1 слайд
    breakpoints: {
        // Для экрана шириной более 768px
      
        768: {
            slidesPerView: 2, // Показываем 2 слайда
        },
        // Для экрана шириной более 1024px
        1024: {
            slidesPerView: 3, // Показываем 3 слайда
        },
    }
});