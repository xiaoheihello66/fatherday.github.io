	$(".xh").click(function(){
				var h=$(window).scrollTop(); //获取当前滚动条距离顶部的位置
		 $("html,body").animate({ scrollTop: h+600 }, 800);//点击按钮向下移动600px，时间为800毫秒
		});