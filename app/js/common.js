$('.btn-toggle').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

// $('.catalog-slider').slick({
//     slidesToShow: 1,
//     prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png" alt=""></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="img/prev.png" alt=""></button>',
//     responsive: [
//         {
//             breakpoint: 576,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }
//     ]
// });

// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 480) {
        $('.catalog-slider:not(.slick-initialized)').slick({
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/prev.png" alt=""></button>',
        });
    } else {
        $(".catalog-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.product-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.product-gallery-preview'
});

$('.product-gallery-preview').slick({
    slidesToShow: 3,
    appendArrows: '.slider-nav',
    asNavFor: '.product-gallery-max',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/prev.png" alt=""></button>',
});

new WOW().init();