$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		normalScrollElements:'.pop,#intro,.main_pop_up_bg,.main_pop_up',
		responsiveWidth: 1180,
		responsiveHeight: 767,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


	

	$("#link_project").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index);
	})
	$("#link_graphic").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index + 1);
	})
	$("#link_clone_coding").click(function(){
		var index  = $(this).parent().index();
		$.fn.fullpage.moveTo(index + 2);
	})

});
