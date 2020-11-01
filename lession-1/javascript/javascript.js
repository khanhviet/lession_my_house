window.onload = function() {
    $('.carousel-slides-bellow').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // // dots: false,
        // autoplaySpeed: 2000,
        prevArrow: '<div class="arrow-prev-bellow has-arrow" style="left:16px"></div>',
        nextArrow: '<div class="arrow-next-bellow has-arrow"> </div>',
        responsive: [{
                breakpoint: 935,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 735,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.carousel-slides-top').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<div class="arrow-prev-top has-arrow"></div>',
        nextArrow: '<div class="arrow-next-top has-arrow"></div>',
        customPaging: function(slider, i) {
            return '<div class="slick-dot" style="text-align:center"> <span class="dot"></span></div>'
        },
        // appendDots: '<div class="slick-dot" style="text-align:center"><span class="dot"></span></div>',
        responsive: [{
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // $(window).on('resize', function() {
    //     $('.layout3_content').slick('resize');
    //     $('.layout5_content').slick('resize');
    // });
};