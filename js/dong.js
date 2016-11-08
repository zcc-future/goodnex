$(document).ready(function() {
	$(".zhong5xxk div").eq(0).css({"borderTopColor":"#79BE0B","borderBottomColor":"white"})
	$(".zhong5xxk1").css("display","none").eq(0).css("display","block")
	$(".zhong5xxk div").click(function(){
		var index=$(this).index()
		$(".zhong5xxk div").css({"borderTopColor":"#eee"})
		$(this).css({"borderTopColor":"#79BE0B","borderBottomColor":"white"})
		$(".zhong5xxk1").css("display","none").eq(index).css("display","block")
	})
	$("#guding").css("display","none")
	$(window).scroll(function(){
		var top=$(window).scrollTop()
		
		$("#guding").css("display","block")
		if(top==0){
		$("#guding").css("display","none")
	}
	})
	$(".dh").eq(0).css({"background":"#79BE0B","color":"whiite"})
	
	

$(".banner").css("display","none").eq(0).css("display","block")
var t1=setInterval(ban,3000)
var now=0;
function ban(){
	now++;
	if(now>=4){
		now=0
	}
	$(".banner").css("display","none").eq(now).css("display","block")
	
}
function ban1(){
	now++;
	if(now<=0){
		now=4
	}
	$(".banner").css("display","none").eq(now).css("display","block")
	
}
$(".banright").click(function(){
	ban()
})
$(".banleft").click(function(){
	ban1()
})

//轮播
var aw=$(".lb1 div:first-Child").width()+20
var tt=setInterval(movez,2000)
var shu=1;
//function movez(){
//	shu++
//	if(shu>4){
//		shu=1
//	}
//	$(".lb1").animate({left:-aw},1000,function(){
//		 $(".lb1").append($("#jd"+shu))
//	     $(".lb1").css("left","0")
//	})
//
//}	

})