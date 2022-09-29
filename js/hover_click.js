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


	// #pop_up
	//팝업창 열기
	$('.box_wrap a').each(function(){   
		var href = $(this).attr('href');  
		var href_btn = $(href).find('.btn');  
  
		$(this).click(function(){                 
		  $('.pop').hide();                       
		  $(href).show();                         
		})
		$(href_btn).click(function(){         
		  $(href).fadeOut(300);                   
		})
	  })
	})//end

	  $(document).mouseup(function (e){
		if($(".pop").has(e.target).length === 0){
		  $(".pop").stop().fadeOut(300);
		}
	  })

	  

