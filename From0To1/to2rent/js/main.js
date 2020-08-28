$(function () {
    $('.slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive:[
            {
                breackpoint: 768,
                arrows: false
            }
        ]
    })
});