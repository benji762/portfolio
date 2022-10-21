$(document).ready(function() {
	$(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		arrows : true,
        dots : true,
        autoplay:true,
        speed : 800,
        autoplaySpeed : 2000, 
        pauseOnHover : true
      });
});