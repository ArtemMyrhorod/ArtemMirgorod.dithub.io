$(function(){
	const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
	const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
	const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
	const header = document.querySelector('.header.container');
	hamburger.addEventListener('click',()=>{
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
	document.addEventListener('scroll', () => {
		var scroll_position = window.scrollY;
		if(scroll_position > 200) {
			header.style.backgroundColor = "#29323c";
		} else {
			header.style.backgroundColor = "transparent";
		}
	});

	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){


				window.location.hash = hash;
			});
		} 
	});

	setTimeout(function(){
		window.scrollTo(0, 0);
	}, 1);

	menu_item.forEach((item) => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			mobile_menu.classList.toggle('active');
		});
	});

});