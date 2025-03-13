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
    slidesPerView: 1, 
    breakpoints: {
   

        768: {
            slidesPerView: 2, 
        },
    
        1024: {
            slidesPerView: 3, 
        },
    }
});

lucide.createIcons();





document.addEventListener("DOMContentLoaded", function () {
    const drawer = document.querySelector(".drawer");
    const overlay = document.querySelector(".overlay");
    const openBtn = document.querySelector(".product-empty-btn"); 
    const closeBtn = document.querySelector(".close-drawer");

    const drawerTwo = document.querySelector(".drawer-two");
    const overlayTwo = document.querySelector(".overlay-two");
    const openBtnTwo = document.querySelector(".sels-btn"); 
    const closeBtnTwo = document.querySelector(".close-drawer-two");


    function openDrawer() {
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.classList.add("locked");
    }


    function closeDrawer() {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.classList.remove("locked");
    }


    function openDrawerTwo() {
        drawerTwo.classList.add("open");
        overlayTwo.classList.add("open");
        document.body.classList.add("locked");
    }

    
    function closeDrawerTwo() {
        drawerTwo.classList.remove("open");
        overlayTwo.classList.remove("open");
        document.body.classList.remove("locked");
    }


    openBtn.addEventListener("click", openDrawer);

   
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    
    openBtnTwo.addEventListener("click", openDrawerTwo);

   
    closeBtnTwo.addEventListener("click", closeDrawerTwo);
    overlayTwo.addEventListener("click", closeDrawerTwo);


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



