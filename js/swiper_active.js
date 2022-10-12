$(function(){


new Swiper('.s2_slider', {
	initialSlide: 0,
	slidesPerView : 'auto',
	spaceBetween : 30,
	slidesPerGroup : 1,
	freeMode: true,
	navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

})

