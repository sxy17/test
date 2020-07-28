$(".left>.list>ul>li>a").click(function(){
	$(".right>.lisone").css("display","none");
	$(this).css("color","rgb(95,173,1)").siblings(".left>.list>ul>li>a").css("color","#000");
	var index=$(this).index();
//	$(".right>.lis").eq(index).css("display","block").siblings(".right>.lis").css("display","none");
	$(".right>.lis").eq(index).show();
})