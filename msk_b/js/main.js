/* main.js */

//전역 변수 설정
var scrollEvent=false;
var count=0;
var winTop=$(window).scrollTop();
var docTop=$(document).scrollTop();
var secTop=[".s1", ".s2", ".s3", ".s4", ".s5", ".s6"];
var sbtns=[".sbtn1", ".sbtn2", ".sbtn3", ".sbtn4", ".sbtn5", ".sbtn6"];

//전체페이지 스크롤링
//마우스휠 이벤트
$("html, body").on("mousewheel",function(c){
	c.preventDefault();
	var m=c.originalEvent.wheelDelta;
	var sb=$(".Sec:eq(0)").height();

	if(m>1 && scrollEvent==false &&count >=1){
		scrollEvent=true;
		count--;
		$("html, body").stop().animate({scrollTop:sb*count}, 900, function(){ scrollEvent=false; });
	}else if( m<1 && scrollEvent==false && count <5 ){
		scrollEvent=true;
		count++;
		$("html, body").stop().animate({scrollTop:sb*count}, 900, function(){ scrollEvent=false; });
	}

	for( a=0; a<6; a++ ){
		if( count==a ){ 
			$(".scrollBtn a").css("backgroundColor","#a2a1a0"); 
			$(sbtns[a]).children("a").css("backgroundColor","#ed1c24");
		}
	}
});//wheel END
//페이지 로드시 페이지 위치와 버튼 일치
for( n=0; n<6; n++ ){
	if( winTop == $(secTop[n]).offset().top || count==n ){ 
		$(".scrollBtn a").css("backgroundColor","#a2a1a0"); 
		$(sbtns[n]).children("a").css("backgroundColor","#ed1c24");
		count=n;
	}
}

//버튼 클릭시 해당 위치 스크롤
$(".scrollBtn").click(function(){
	var sIndex=$(this).index();
	$(".scrollBtn a").css("backgroundColor","#a2a1a0");
	$(this).children("a").css("backgroundColor","#ed1c24");
	$("html, body").animate({scrollTop:$(".Sec:eq("+sIndex+")").offset().top}, 900, function(){ count=sIndex; scrollEvent=false; });
	return false;
});//click END

///*
//.s2 hover기능
//초기화 함수 선언
function hoverResets2(){
	$(".s2 .idbBlock li").children("a").removeClass("on");//초기화
	$(".s2 .indexBg img").css("opacity","0");//초기화	
	$(".s2 .idCont").removeClass("on");//초기화	
	$(".s2 .indexCont").css("opacity","0");//초기화
}
hoverResets2();
$(".s2 .idbBlock li").mouseenter(function(){
	var thisIndex=$(this).index();	
	hoverResets2();
	$(".mc2").hide();
	$(".s2 .indexCont").css("opacity","1");	
	$(".s2 .indexBg img").eq(thisIndex).css("opacity","1");	
	$(".s2 .idCont").eq(thisIndex).addClass("on");	
	$(this).children("a").addClass("on");
	$(".s2 .idbb1 a img, .idbb1 a span").css({"animation":"unset"});
}).mouseleave(function(){	 
		hoverResets2();
		$(".mc2").stop().fadeIn();	
});//END 

//.s3 hover기능
function hoverResets3(){
	$(".s3 .idbBlock li").children("a").removeClass("on");//초기화
	$(".s3 .indexBg img").css("opacity","0");//초기화	
	$(".s3 .idCont").removeClass("on");//초기화	
	$(".s3 .indexCont").css("opacity","0");//초기화
}
hoverResets3();
$(".s3 .idbBlock li").mouseenter(function(){
	var thisIndex=$(this).index();	
	hoverResets3();
	$(".mc3").hide();
	$(".s3 .indexCont").css("opacity","1");	
	$(".s3 .indexBg img").eq(thisIndex).css("opacity","1");	
	$(".s3 .idCont").eq(thisIndex).addClass("on");	
	$(this).children("a").addClass("on");
	$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
}).mouseleave(function(){
	hoverResets3();
	$(".mc3").stop().fadeIn();
});//END 
//*/

//scroll animation
$(".mc1").fadeIn();
$(window).scroll(function(){
	var value=$(this).scrollTop();
	$(".mCont").hide();
	$(".graphBox").hide();
	$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
	//console.log(winTop, value, $(".s1").offset().top, $(".s2").offset().top );
	if( value < $(".s2").offset().top ){ //.s1구간
		$(".mc1").fadeIn();
		$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
	}else if( value >= $(".s2").offset().top && value < $(".s3").offset().top ){  //.s2구간
		$(".mc2").fadeIn();
		$(".idbb1 a img, .idbb1 a span").css({"animation":"opacitya 3s ease-in infinite"});
	}else if( value >= $(".s3").offset().top && value < $(".s4").offset().top ){  //.s3구간
		$(".mc3").fadeIn();
		$(".idbb1 a img, .idbb1 a span").css({"animation":"opacitya 3s ease-in infinite"});
	}else if( value >= $(".s4").offset().top && value < $(".s5").offset().top ){  //.s4구간
		$(".mc4").fadeIn(function(){
			$(".graphBox").stop().fadeIn("slow");
		});	
		$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
	}else if( value >= $(".s5").offset().top && value < $(".s6").offset().top ){  //.s5구간
		$(".mc5").fadeIn();
		$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
		$(".slide").css({"animation":"flowSlide 60s infinite alternate"});
	}else if( value >= $(".s6").offset().top ){  //.s6구간
		$(".mc6").fadeIn();
		$(".idbb1 a img, .idbb1 a span").css({"animation":"unset"});
	}
});//scroll END


