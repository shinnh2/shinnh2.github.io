$(document).ready(function(){
	//1. gnb 숨기기
	$(".gnb").css({"marginLeft":"-200px"});
	//2. .menu_btn/클릭이벤트/.gnb 나타나기
	$(".menu_btn").click(function(){
		if( $(".gnb").css("marginLeft")=="-200px" ){
			$(".gnb").animate({"marginLeft":"0px"}, 500);
		}else if( $(".gnb").css("marginLeft")=="0px" ){
			$(".gnb").animate({"marginLeft":"-200px"}, 500);
		} 
	});//click END
	//3. gnb menu
	$(".gnb>li>ul").hide();
	$(".gnb>li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
	}).mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});//mouseenter leave END
});//END