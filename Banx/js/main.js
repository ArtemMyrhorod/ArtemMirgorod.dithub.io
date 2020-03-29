$(document).ready(function() {
	$("#js-btn").on("click", function(event) {
		event.preventDefault();
		$("#js-about").offset().top;
		$("html, body").animate({
			scrollTop: $("#js-about").offset().top
		}, 2000);
	});

	$(".team-slider__items").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		autoplay: true
	});
	$(".clients-slider__items").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		dots: true,
		autoplay: true
	});
		$(".testimonials-slider__items").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true
	});

	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});