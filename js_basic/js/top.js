$(document).ready(function(){
	//1. 처음에는 숨기기
	$(".top a").hide();
	//2. 대상:window/이벤트: scroll/아래로 스크롤하면 .top a보이고, 위로 가면 .top a보이지 않도록 하기
	$(window).scroll(function(){
		if( $(document).scrollTop() >= 100 ){ $(".top a").fadeIn(); }
		if( $(document).scrollTop() < 100 ){ $(".top a").fadeOut(); }
	});//scroll END
	//3. 대상:.top a/이벤트: 클릭/상단으로 움직여서 이동
	$(".top a").click(function(){
		$("html, body").animate({ scrollTop:$("html, body").offset().top }, 800);
		return false; 
	});//click END
});//END