// up and down mobile menu
let nav = $('.head_items-wrapper_up_menu_mob > nav');

$('.close').click(function(){
	if (nav.css('top') >= '0px'){
		nav.css({'top': '-480px'});
	}
});

$('.head_items-wrapper_up_menu_mob_button').click(function(){
	if (nav.css('top') <= '480px'){
		nav.css({'top': '0'});
	}
});


// button to raise (footer)
$(function(){
	$('.btn-up').bind('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0},"slow");
	});
});


// changing the color of the circle in the sidebar (hover)
$('.ctl-content_wrapper_sidebar li').hover(function(){
	$(this).addClass('change-color');
}, function(){
	$(this).removeClass('change-color');
});

// changing the color of the circle in the sidebar (click)
$('.ctl-content_wrapper_sidebar li').click(function(e){
	// console.log(e.target.parentElement.children[0].classList[0]);

	if ($(this).hasClass('constantly-color') == false){
		$(this).addClass('constantly-color');
	} else {
		$(this).removeClass('constantly-color');
	}
});

// leave review
function toggleReview(){
	// animate of hiding
	$(".modal").animate({
		opacity: "toggle"
	}, "slow", function(){
		// cancle scrolling
		$('html, body').css('overflow-y', 'visible');
	});
}

// open review
$('.btn-leave-review').click(function(){
	toggleReview();	
});

// close review
$('.modal').click(function(e){
	switch ('modal-window') {
		case (e.target.parentElement.classList[0] || e.target.parentElement.parentElement.classList[0]):
			// If you dont check, there will be an error
			break;
			case e.target.children[0].classList[0]:
			toggleReview();
			break;
		}
	});