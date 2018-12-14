;(function($){
	$(document).ready(function(){
		$('.make-carousel .vc_column-inner .wpb_wrapper').slick({

		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,

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
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    ]
		  
		});
	
})(jQuery);