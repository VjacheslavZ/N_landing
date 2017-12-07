;(function () {
    let video = document.querySelector(".header__video-bg");
    video.volume = 0;
})();



$(document).ready(function () {
    $(".personal-plan__icon-wrap").equalHeights();
    $(".personal-plan__name").equalHeights();

    $('.reviews__slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 750,
        // navText: ["<a class=\"custom__btn-slider btn_prev\"></a>","<a class=\"custom__btn-slider btn_next\"></a>"],
        autoplayTimeout: 5000,
        items: 3,
        // responsive: {
        //     1200: {
        //         //margin: 15
        //     },
        //     1200: {
        //         items: 3
        //     },
        //     767: {
        //         items: 2
        //     },
        //     667: {
        //         items: 2
        //     },
        //     600: {
        //         items: 1
        //     },
        //     0: {
        //         items: 1
        //     },
        // }
    });

    //hide preloader
    $(".loader_inner").fadeOut("slow");
    $(".loader").fadeOut("slow");
});




