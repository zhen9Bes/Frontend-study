$(function () {
    $('.fairy-tail__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="img/arrow-prew.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="img/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    })
    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="img/arrow-prew.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="img/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    })
});