// declaring global variable
var myPort = {};

// if there is a value you will use over and over you might want to store it as a property in your global variable
// myPort.url = 'http://www.urlhere.com';

// method to draw SVG
// myPort.drawSVG = function() {

// };

// define init function
// this starts everything going on the page
myPort.init = function() {
	var svg = new Walkway({ 
	    	selector: '#svgIntro',
	    	duration: '2000', 
	    }); 
	svg.draw();
};

// doc ready function calls init function
$(document).ready(function(){
	console.log('jQuery is working!')
  	myPort.init();
});
