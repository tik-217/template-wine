$(function(){
	$('.proba_content_slider').slick({
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		// adaptiveHeight: true,
		variableWidth: true,
		arrows: false,
		focusOnSelect: false,
		swipe: false,
		dots: false,
		asNavFor: '.proba_content_slider_slides_circle',
	});

	$('.proba_content_slider_slides_circle').slick({
        slidesToShow: 3,
		swipe: false,
		vertical: true,
        asNavFor: '.proba_content_slider',
        focusOnSelect: true
    });
});

