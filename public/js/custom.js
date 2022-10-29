// PRELOADER
$(window).load(function() {
  try {
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
  } catch (e) {
    console.log(e);
  }
});

// HOME BACKGROUND SLIDESHOW
$(function() {
  jQuery(document).ready(function() {
	try {
	  $('body').backstretch([
	    "images/tm-bg-slide-1.jpg", 
  		"images/tm-bg-slide-2.jpg",
	  	"images/tm-bg-slide-3.jpg"
	  ], { duration: 3200, fade: 1300 });

	  var year = new Date().getFullYear();
	  $('.curr-year').text(year);
	} catch (e) {
	  console.log(e);
	}
  });
});
