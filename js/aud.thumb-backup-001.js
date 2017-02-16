
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
						$(this).css('width',itemWidth);
						itemCount++;
	        });
	        var innerWrapperWidth = itemCount * itemWidth;
	        var itemCountWidth = numberPerviewPort * itemWidth;
	        var balanceItemWidth = innerWrapperWidth - itemCountWidth;
	        $(this).find('.aud-thumb-inner-stage-wrapper').css('width',innerWrapperWidth);

	        // console.log(innerWrapperWidth);
	        // console.log(itemCountWidth);
	        console.log(123);
	        // console.log(balanceItemWidth);


	        var transformIndex = 0;
	        var intervalID = setInterval(function() {
	        	var addedTransactionIndex = parseInt(transformIndex) + parseInt(itemWidth); 
	        	transformIndex = $(this).index() * addedTransactionIndex;
	        	$(this).find('.aud-thumb-inner-stage-wrapper').css("transform","translateX(-"+ transformIndex +"px)");
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