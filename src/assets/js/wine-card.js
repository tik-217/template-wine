$(function(){
	$('.card_slide-goods').slick({
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true,
		focusOnSelect: false,
		swipe: false,
		dots: false,
		mobileFirst: true,
		asNavFor: '.card_slide-button',
	});

	$('.card_slide-button').slick({
		slidesToShow: 3,
		swipe: false,
		vertical: true,
		asNavFor: '.card_slide-goods',
		focusOnSelect: true
	});
});