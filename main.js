// hover navigation show hide
$(document).ready(function () {

	$('.right_nav').mouseover(function (e) {
		var id = e.target.id;
		if(id == ''){
			var icon = $(this).find('span');
			TweenLite.to(icon, 0.3, { left:"-50px", opacity: "1" });
		}
	});


	$('.right_nav').mouseleave(function (e) {
		var id = e.target.id;
		if(id == ''){
			var icon = $(this).find('span');
			TweenLite.to(icon, 0.3, { opacity: "0", left:"0px"  });
		}
	});
});

// smooth scroll

$('.nav a').on('click', function() {

		var scrollAnchor = $(this).attr('data-scroll'),
		scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top + 5;

		$('body,html').animate({
			scrollTop: scrollPoint
		}, 500);

		return false;

	});


// changing states of nav buttons
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('section').each(function(i) {
				if ( $(this).position().top <= windscroll){
					$('nav a.fa-circle').removeClass('fa-circle');
					$('nav a').eq(i).addClass('fa-circle');

				}
			});

		}

	}).scroll();









// $(window).scroll(function(){
// 	var scroll=$(window).scrollTop();
// 	if(scroll>=100){
// 		// var sections=document.getElementsByTagName('section')[0];
// 		// console.log($('section'));
// 		$('section').each(sectionIdentification());
// 		console.log("scroll");
// 	}
// });

// var sectionIdentification= function(){
// 	console.log("sectionIdentification");
// 	console.log($(this).position().top);
// 	if($(this).position().top<=scroll){
// 		getNavigationElement();
// 	}
// }

// var getNavigationElement= function(){
// 	var navigation=document.getElementsById('right_nav');
// 	navigation.each(navigationLoop());
// }

// var navigationLoop= function(){
// 	var anchors= navigation.getElementsByClassName('fa-circle-o');
// 	anchors.each(function(){
// 		if (($('section').id=='home')) {
// 			$("#toggle").toggleClass('fa-circle-o, fa-circle');
// 		}

// 		if (($('section').id=='port')) {
// 			$("#toggle1").toggleClass('fa-circle-o, fa-circle');
// 		}

// 		if (($('section').id=='contact')) {
// 			$("#toggle2").toggleClass('fa-circle-o, fa-circle');
// 		}

// 		if (($('section').id=='about')) {
// 			$("#toggle3").toggleClass('fa-circle-o, fa-circle');
// 		}
// 	});
// }



















	// $(window).scroll(function() {
	// 	var windscroll = $(window).scrollTop();
	// 	if (windscroll >= 100) {

	// 		$('section').each(function(i) {
	// 			if ( $(this).position().top <= windscroll){
	// 				$('nav a.active').removeClass('active');
	// 				$('nav a').eq(i).addClass('active');
	// 				$("#").toggleClass('change_me newClass');
				// }
			// });

		// } else {

			// $('nav').removeClass('color');
			// $('nav a.active').removeClass('active');
			// $('nav a:first').addClass('active');
		// }

	// }).scroll();

	// changing color of left nav
	// $(document).on('scroll', function() {
	// 	if($(this).scrollTop()>=$('contact','port').position().top){			
	// 			$(".nav").css("color", "white");			
	// 	}
	// })

	// var element= document.getElementsByClassName("right_nav");
	// console.log(element);
