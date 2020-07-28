$(".nav_left .gou").hover(function(){
	$(".gou").css("background","white");
	$(".xia").css("display","block");
	$(".mg").css("transform","rotate(180deg)");
	var j=setTimeout(function(){
		$(".xia>img").css("display","none");
		$(".xia>p").css("display","block");
		$(".xia>span").css("display","block");
	},200)
},function(){
	$(".xia>img").css("display","block");
	$(".gou").css("background","");
	$(".xia").css("display","none");
	$(".mg").css("transform","");
})



$(".nav_left .shou").hover(function(){
	$(".shou").css("background","white");
	$(".xia1").css("display","block");
	
	$(".nav_left .shou:before").css("display","none");
	$(".shou .mobi").css("display","block");
	
	$(".nav_left .shou .down").css("display","none");
	$(".shou .up").css({"display":"block","transform":"rotate(180deg)"});
	
},function(){
	$(".nav_left .shou:before").css("display","block");
	$(".shou .mobi").css("display","none");
	
	$(".nav_left .shou .down").css("display","block");
	$(".shou .up").css("display","none");
	
	$(".shou").css("background","");
	$(".xia1").css("display","none");
})



$(document).ready(function(){
	var lunbo=$(".lunbo");
	tup=lunbo.find(".tup");
	showNumber=lunbo.find(".dian li");
	oneWidth=lunbo.find(".tup li").eq(0).width();
	showNumber.on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		tup.animate({
			"left":-oneWidth*index,
		})
	})
})



$(function(){
	var size1=$('.pic>li').length;
	$('.pic>li').eq(0).show();
	$('.lunbo1>.nav>li').eq(0).addClass('active');
	$('.lunbo1>.nav>li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		var i=index;
		$('.pic>li').eq(index).fadeIn(500).siblings('.pic>li').fadeOut(4000);
		$('.pic>li').eq(index).css("opacity","0.85").siblings('.pic>li').css("opacity","1");
		$(".lunbo1>div").eq(index).css("display","block").siblings(".lunbo1>div").css("display","none");
	})
	
	
	var i=0;
	var t=setInterval(move,4000);
	function moveLeft(){
		i--;
		if (i == -1) {
         i = size1-1;
        }
		$('.lunbo1>.nav>li').eq(i).addClass('active').siblings().removeClass('active');
		$('.pic>li').eq(i).fadeIn(500).siblings('.pic>li').fadeOut(4000);
		$('.pic>li').eq(i).css("opacity","0.85").siblings('.pic>li').css("opacity","1");
		$(".lunbo1>div").eq(i).css("display","block").siblings(".lunbo1>div").css("display","none");
	}
	
	function move(){
		i++;
		if (i == size1) {
	     i = 0;
	    }
		$('.lunbo1>.nav>li').eq(i).addClass('active').siblings().removeClass('active');
		$('.pic>li').eq(i).fadeIn(500).siblings('.pic>li').fadeOut(4000);
		$('.pic>li').eq(i).css("opacity","0.85").siblings('.pic>li').css("opacity","1");
		$(".lunbo1>div").eq(i).css("display","block").siblings(".lunbo1>div").css("display","none");
	}
	 $(".lunbo1").hover(function() {
      clearInterval(t);
    }, function() {
      t = setInterval(move, 4000)
    })
	 
//	$(".lunbo>.left").click(function() {
//    moveLeft();
//  })
//  //右边按钮的点击事件
//  $(".lunbo>.right").click(function() {
//    move();
//  })
})