// slider
$('.gallery-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	infinite: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1080,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 660,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});