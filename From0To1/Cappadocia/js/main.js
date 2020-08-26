$(function () {
    $(".menu, .our-trip__content-text").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
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