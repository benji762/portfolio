$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		normalScrollElements:'.pop,#intro',
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


	

	$("#link_website").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index);
	})
	$("#link_graphic").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index + 1);
	})
	$("#link_contect_me").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index + 2);
	})

});
