$(document).ready(function() {
	$('.link_wrap_inner_txt').each(function(){
		$(this).hover(function(){
			$(this).addClass('white_txt');
			$('.link_wrap_inner_txt').addClass('black_txt')
			$('.link_wrap').addClass('black');
			
		},function(){
			$(this).removeClass('white_txt');
			$('.link_wrap_inner_txt').removeClass('black_txt')
			$('.link_wrap').removeClass('black');
		})
	})
});