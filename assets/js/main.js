
(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(300).fadeOut();
	});

	

	///////////////////////////
	// Smooth scroll
	
		$('a[href="#scroll"]').on('click', function(e){
			e.preventDefault();
			var hash = this.hash
			$('html, body').animate({
		      scrollTop: $(this.hash).offset().top
		    }, 1000);
		    // return false;
		});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

		$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});
	

})(jQuery);