$(function(){
	$('.proba_content_slider').slick({
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		focusOnSelect: false,
		swipe: false,
		dots: false,
		asNavFor: '.proba_content_slider_slides_circle',
		// responsive: [
		// {
		// 	breakpoint: 1200,
		// 	settings: {
		// 	}
		// },
	});

	$('.proba_content_slider_slides_circle').slick({
		slidesToShow: 3,
		swipe: false,
		vertical: true,
		asNavFor: '.proba_content_slider',
		focusOnSelect: true
	});
});