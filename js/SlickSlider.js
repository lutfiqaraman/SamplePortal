$(document).ready(function(){
    $('.SlickSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });
});

$('.right-arrow').on('click', function () {
    $('.SlickSlider').slick('slickPrev');
});

$('.left-arrow').on('click',function () {
    $('.SlickSlider').slick('slickNext');
});

var TypeofAimation = 'animated bounceInUp';

$('.card').hover(function () {
    $('.get-ticket').removeClass('hidden');
    $('.get-ticket p').addClass(TypeofAimation);
}, function () {
    $('.get-ticket').addClass('hidden');
    $('.get-ticket p').removeClass(TypeofAimation);
});