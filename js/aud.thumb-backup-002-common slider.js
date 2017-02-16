
$(document).ready(function() {

	$.fn.extend({
	    audThumb: function () {
	    		var numberPerviewPort = 5;
	    		$(this).addClass('aud-thumb-wrapper');
	        var audThumbInnerHtml = $(this).html();
	        var newAudThumbInnerHtml = '<div class="aud-thumb-inner-wrapper"><div class="aud-thumb-inner-stage-wrapper">' + audThumbInnerHtml + '</div></div>';
	        $(this).html(newAudThumbInnerHtml);
	        var winWidth = $(window).width();
	        var audThumbWidth = $(this).width();
	        var itemWidth = audThumbWidth/numberPerviewPort;
	        var  itemCount = 0;
	        $(this).find('.item').each(function() {
	     //    	if ($(this).isOnScreen()) {
						//     // The element is visible, do something
						//     console.log('visible');
						// } else {
						// 		console.log('not visible');
						//     // The element is NOT visible, do something else
						// }
						if(itemCount < numberPerviewPort) {
							
						}
						$(this).css('width',itemWidth);
						itemCount++;
	        });
	        var innerWrapperWidth = itemCount * itemWidth;
	        var itemCountWidth = numberPerviewPort * itemWidth;
	        var balanceItemWidth = innerWrapperWidth - itemCountWidth;
	        var innerWrapperObj = $(this).find('.aud-thumb-inner-stage-wrapper');
	        var idexDiv = $(this).index();
	        $(innerWrapperObj).css('width',innerWrapperWidth);
	        var transformIndex = 0;
	        var intervalID = setInterval(function() {
	        	var addedTransactionIndex = parseInt(transformIndex) + parseInt(itemWidth); 
	        	transformIndex = idexDiv * addedTransactionIndex;
	        	if(transformIndex < balanceItemWidth) {
	        		// $(innerWrapperObj).hide();
	        		// setTimeout(function(){ 
	        		// 	$(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)");
	        		// 	// $(innerWrapperObj).show(3000);
	        		//  }, 1000);
	        		// 	$(innerWrapperObj).show(2000);
	        		
	        		$(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)");
	        		
	        	}
	        	else {
	        		transformIndex = itemWidth;
	        		$(innerWrapperObj).css("transform","translate3d(-"+ 0 +"px,0px,0px)");
	        		$(".aud-thumb-inner-stage-wrapper").fadeIn();
	        	}
	        	
	        }, 5000);



	        // console.log(winWidth);
	        // console.log(audThumbWidth);
	        // console.log(itemWidth);
		// return audThumbInnerHtml;
	    }
	});
	$('#test').audThumb();
	// console.log($('#test').audThumb());

});