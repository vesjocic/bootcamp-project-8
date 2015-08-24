// declaring global variable
var myPort = {};

// method to draw SVG
myPort.drawSVG = function() {
	var svg = new Walkway({ 
	    	selector: '#svgIntro',
	    	duration: '2000', 
	    }); 
	svg.draw();
};

// method for smooth scrolling of xlinks
myPort.smoothScrollX = function() {
	// on click of xlink:hrefs do the following
	$('.linkX').on('click',function (e) {
		// prevent default action
		e.preventDefault();
		// defining target variable for xlinks
		var targetX = $($(this).attr('xlink:href'));
		var text = $(this).attr('xlink:href');
		// smooth scroll to target
		$('html, body').stop().animate({
			scrollTop: targetX.offset().top
		}, 900, 'swing', function () {
			window.location.hash = text;
		});
	});
};

// method for smooth scrolling regular links
myPort.smoothScroll = function() {
	// on click of regular hrefs do the following
	$('.link').on('click',function (e) {
		// prevent default action
		e.preventDefault();
		// defining target variable for links
		var target = $(this.hash);
		var text = $(this).attr('href');
		// smooth scroll to target
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = text;
		});
	});
};

// method to make fixed nav appear on scroll
myPort.showNav = function() {
	// on scroll do the following
	$(window).scroll(function() {
		// defining bottom of svg
		// bottom of svg = position of top of svg + height of svg
		var bottom_of_svg = $('#svgIntro').offset().top + $('#svgIntro').outerHeight();
		// if the svg is completely hidden, fade in nav
		if ( $(window).scrollTop() > bottom_of_svg ) {
		    $('#nav').fadeIn(300);
		} else {
		    $('#nav').fadeOut(300);
		}
	});
}

// method to make divs appear on scroll
myPort.showDivs = function() {
	// on scroll do the following
	$(window).scroll(function() {
		// check location of each element
		$('.hide').each( function(i) {
			// defining bottom of object
			// bottom of object = position of top of div + div height
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			// defining bottom of window
			// bottom of window = pixels hidden above + height of current window
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			// if the object is completely visible in the window, fade it in
			if ( bottom_of_window > bottom_of_object ) {
				$(this).animate({'opacity':'1'},300);
			}
		});
	});
}

// define init function
myPort.init = function() {
	myPort.drawSVG();
	myPort.smoothScrollX();
	myPort.smoothScroll();
	myPort.showNav();
	myPort.showDivs();
};

// doc ready function calls init function
$(document).ready(function() {
	console.log('jQuery is working!')
  	myPort.init();
});
