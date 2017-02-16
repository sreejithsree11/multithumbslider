$.fn.extend({
	    audThumb: function () {
	    		var numberPerviewPort = 4;
	    		$(this).addClass('aud-thumb-wrapper');
	        var audThumbInnerHtml = $(this).html();
	        var newAudThumbInnerHtml = '<div class="aud-thumb-inner-wrapper"><div class="aud-thumb-inner-stage-wrapper">' + audThumbInnerHtml + '</div></div>';
	        $(this).html(newAudThumbInnerHtml);
	        var winWidth = $(window).width();
	        var audThumbWidth = $(this).width();
	        var itemWidth = audThumbWidth/numberPerviewPort;
	        itemWidth = parseInt(5) + parseInt(itemWidth);
	        var  itemCount = 0;
	        $(this).find('.item').each(function() {
						$(this).css('width',itemWidth);
						$(this).css('marginLeft',5);
						itemCount++;
	        });
	        var innerWrapperWidth = itemCount * itemWidth;
	        innerWrapperWidth = parseInt(innerWrapperWidth) + parseInt(5*12);

	        var itemCountWidth = numberPerviewPort * itemWidth;
	        var balanceItemWidth = innerWrapperWidth - itemCountWidth;
	        var innerWrapperObj = $(this).find('.aud-thumb-inner-stage-wrapper');
	        // var idexDiv = $(this).index();
	        var idexDiv = 1;
	        $(innerWrapperObj).css('width',innerWrapperWidth);
	        var transformIndex = 0;
	       	var numberPerviewPortMod = itemCount % numberPerviewPort;
	       	var itemCountWidthForTrans = itemCountWidth;
	       	$('.item > img').fadeOut();
      		setTimeout(function(){ 
      			$(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)");
      		 }, 500);
      		setTimeout(function(){ 
      			$('.item > img').fadeIn();	
      		 }, 500);

	       	//  Intervel function 
	        var intervalID = setInterval(function() {
	        	var addedTransactionIndex = parseInt(transformIndex) + parseInt(itemCountWidthForTrans); 
	        	transformIndex = idexDiv * addedTransactionIndex;
	        	if(transformIndex < balanceItemWidth) {
	        		itemCountWidthForTrans = itemCountWidth;
	        		$('.item > img').fadeOut();
	        		setTimeout(function(){ 
	        			$(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)");
	        		 }, 500);
	        		setTimeout(function(){ 
	        			$('.item > img').fadeIn();	
	        		 }, 500);
	        	}
	        	else {
	        		if(numberPerviewPortMod > 0) {
	        			transformIndex = calcInfiniteLoopIndex(itemCount,numberPerviewPort,itemWidth,numberPerviewPortMod);
	        		}
	        		$('.item > img').fadeOut();
	        		setTimeout(function(){ 
	        			$(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)") 
	        		 }, 500);
	        		setTimeout(function(){ 
	        			$('.item > img').fadeIn();	
	        			transformIndex = 0;
	        			itemCountWidthForTrans = 0;
	        		 }, 500);
	        	}

	        }, 5000);
	    }
	});

/**
	* Function for implement infinite loop.
	*/
	function calcInfiniteLoopIndex(itemCount,numberPerviewPort,itemWidth,numberPerviewPortMod) {
		var numberPerviewPortCount = itemCount / numberPerviewPort;
		var numberPerviewPortCountFloor = Math.floor(numberPerviewPortCount);
		var wrapperCountFloorFinal = numberPerviewPort - numberPerviewPortCountFloor;
		var diffOfNumberPerviewPortAndItemCount = numberPerviewPort - numberPerviewPortMod;
		var numberPerviewPortModItemWidth = diffOfNumberPerviewPortAndItemCount * itemWidth;
		var numberPerviewPortCountFloorWidth = numberPerviewPortCountFloor * numberPerviewPort * itemWidth;
		var finalWidth = numberPerviewPortCountFloorWidth - numberPerviewPortModItemWidth;
		return finalWidth;
	}

$(document).ready(function() {
	$('#test').audThumb();
});