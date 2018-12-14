;(function ($) {
    $(document).ready(function () {
        $('.make-carousel .vc_column-inner .wpb_wrapper').slick({

            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    });
})(jQuery);