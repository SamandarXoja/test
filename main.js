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

lucide.createIcons();





document.addEventListener("DOMContentLoaded", function () {
    const drawer = document.querySelector(".drawer");
    const overlay = document.querySelector(".overlay");
    const openBtn = document.querySelector(".product-empty-btn"); // Кнопка для открытия первого drawer
    const closeBtn = document.querySelector(".close-drawer");

    const drawerTwo = document.querySelector(".drawer-two");
    const overlayTwo = document.querySelector(".overlay-two");
    const openBtnTwo = document.querySelector(".sels-btn"); // Кнопка для второго drawer
    const closeBtnTwo = document.querySelector(".close-drawer-two");

    // Функция открытия первого drawer
    function openDrawer() {
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.classList.add("locked");
    }

    // Функция закрытия первого drawer
    function closeDrawer() {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.classList.remove("locked");
    }

    // Функция открытия второго drawer
    function openDrawerTwo() {
        drawerTwo.classList.add("open");
        overlayTwo.classList.add("open");
        document.body.classList.add("locked");
    }

    // Функция закрытия второго drawer
    function closeDrawerTwo() {
        drawerTwo.classList.remove("open");
        overlayTwo.classList.remove("open");
        document.body.classList.remove("locked");
    }

    // Открытие первого drawer при клике на кнопку "Уточнить наличие"
    openBtn.addEventListener("click", openDrawer);

    // Закрытие первого drawer при клике на кнопку закрытия или фон
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    // Открытие второго drawer при клике на кнопку "Все товары продавца"
    openBtnTwo.addEventListener("click", openDrawerTwo);

    // Закрытие второго drawer при клике на кнопку закрытия или фон
    closeBtnTwo.addEventListener("click", closeDrawerTwo);
    overlayTwo.addEventListener("click", closeDrawerTwo);

    // Закрытие при клике на свободное место для обоих drawer
    document.addEventListener("click", (e) => {
        if (
            !drawer.contains(e.target) && !openBtn.contains(e.target) && drawer.classList.contains("open") ||
            !drawerTwo.contains(e.target) && !openBtnTwo.contains(e.target) && drawerTwo.classList.contains("open")
        ) {
            closeDrawer();
            closeDrawerTwo();
        }
    });
});



