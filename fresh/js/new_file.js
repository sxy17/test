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
