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










// $(window).scroll(function(){
// 	console.log("scroll");
// 		var scroll=$(window).scrollTop();
// 		if(scroll>=100){
// 			$('section').each(sectionIdentification());
// 		}
// 	});

// 	var sectionIdentification= function(){
// 		if($(this).position().top<=scroll){
// 			getNavigationElement();
// 		}
// 	}

// 	var getNavigationElement= function(){
// 		var navigation=document.getElementsById('right_nav');
// 		navigation.each(navigationLoop());
// 	}

// 	var navigationLoop= function(){
// 		var anchors= navigation.getElementsByClassName('fa-circle-o');
// 		anchors.each(function(){
// 			if (($('section').id=='home')) {
// 				$("#toggle").toggleClass('fa-circle');
// 			}

// 			if (($('section').id=='port')) {
// 				$("#toggle1").toggleClass('fa-circle');
// 			}

// 			if (($('section').id=='contact')) {
// 				$("#toggle2").toggleClass('fa-circle');
// 			}

// 			if (($('section').id=='about')) {
// 				$("#toggle3").toggleClass('fa-circle');
// 			}
// 		});
// 	}



















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
