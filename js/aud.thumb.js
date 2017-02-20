$.fn.extend({
    audThumb: function (obj) {
      
      var responsiveNumbers1000 = obj.responsive[1000]['items'];
      var responsiveNumbers600 = obj.responsive[600]['items'];
      var responsiveNumbers0 = obj.responsive[0]['items'];

      // getting number of sliders showing in a view port.
      var numberPerviewPort = getNumberPerviewPort(responsiveNumbers1000,responsiveNumbers600,responsiveNumbers0);

      $(this).addClass('aud-thumb-wrapper');
        
      var audThumbInnerHtml = $(this).html();
      
      var newAudThumbInnerHtml = '<div class="aud-thumb-inner-wrapper"><div class="aud-thumb-inner-stage-wrapper">' + audThumbInnerHtml + '</div></div>';
      
      $(this).html(newAudThumbInnerHtml);
      
      var audThumbWidth = $(this).width();
      
      var itemWidth = audThumbWidth/numberPerviewPort;
      
      var  itemCount = 0;
      
      if(obj.transitionMod == 'slide') {
        $('.aud-thumb-inner-stage-wrapper').addClass('aud-easy-slide');
      }

      $(this).find('.item').each(function() {
          $(this).css('width',itemWidth);
          itemCount++;
      });
      
      var innerWrapperWidth = itemCount * itemWidth;
      
      var itemCountWidth = numberPerviewPort * itemWidth;
      
      var balanceItemWidth = innerWrapperWidth - itemCountWidth;
      
      var innerWrapperObj = $(this).find('.aud-thumb-inner-stage-wrapper');
      // var idexDiv = $(this).index();
      var idexDiv = 1;
      
      $(innerWrapperObj).css('width',innerWrapperWidth);
      
      var transformIndex = 0;
      
      var numberPerviewPortMod = itemCount % numberPerviewPort;
      
      var itemCountWidthForTrans = itemCountWidth;
      
      // Choosing the transition out mode - fade/slide
      transitionModChoosOut(obj.transitionMod);
      
      setTimeout(function(){ 
          $(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)"); 
      }, 1000);
    
      setTimeout(function(){ 
        // Choosing the transition in mode - fade/slide
        transitionModChoosIn(obj.transitionMod);
      }, 1000);
      
      // Condition checking for single image transition.
      if(obj.transitionType == 'singleTransition') {
        itemCountWidthForTrans = itemWidth;
      }

      //  Intervel function 
      var intervalID = setInterval(function() {
          var addedTransactionIndex = parseInt(transformIndex) + parseInt(itemCountWidthForTrans); 
          
          transformIndex = idexDiv * addedTransactionIndex;
        
        if(transformIndex < balanceItemWidth) {
          if (obj.transitionType == 'fullTransition') {
            itemCountWidthForTrans = itemCountWidth;
          }

          // Choosing the transition out mode - fade/slide
          transitionModChoosOut(obj.transitionMod);
          setTimeout(function(){ 
              $(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)");
          }, 1000);
          
          setTimeout(function(){ 
          // Choosing the transition in mode - fade/slide 
          transitionModChoosIn(obj.transitionMod);
          }, 1000);
        }
        else {
          if(numberPerviewPortMod > 0) {
              transformIndex = calcInfiniteLoopIndex(itemCount,numberPerviewPort,itemWidth,numberPerviewPortMod);
          }

          // Choosing the transition out mode - fade/slide
          transitionModChoosOut(obj.transitionMod);

          setTimeout(function(){ 
              $(innerWrapperObj).css("transform","translate3d(-"+ transformIndex +"px,0px,0px)") 
           }, 1000);
          
          setTimeout(function(){ 
            // Choosing the transition in mode - fade/slide
            transitionModChoosIn(obj.transitionMod);
            
            transformIndex = 0;
            itemCountWidthForTrans = 0;
           }, 1000);
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


function transitionModChoosOut(transitionMod) {
  switch(transitionMod) {
    case 'fade':
        $('.item > img').fadeOut();  
        break;
    case 'slide':
        
        break;
    default:
        
  }
}


/**
* Function for checking the transition mode.
* @param transitionMod
*  transitionMod that configured in function initialization time by the user.
**/
function transitionModChoosIn(transitionMod) {
  switch(transitionMod) {
    case 'fade':
        $('.item > img').fadeIn();  
        break;
    case 'slide':
        
        break;
    default:
        
  }
}

/**
* Function for calculating the slider numbers, that going to show in a single port view.
* @param responsiveNumbers
*  number that configured in function initialization time by the user.
* @return
*  Number of item to show in the current window width.
**/
function getNumberPerviewPort(responsiveNumbers1000,responsiveNumbers600,responsiveNumbers0) {
  
  var winWidth = $(window).width();

  if(winWidth > 1000) {
      var getNumber = responsiveNumbers1000;
  }
  else if (( 600 < winWidth ) && ( winWidth < 1000)) {
      var getNumber = responsiveNumbers600;
  }
  else if (winWidth < 600){
      var getNumber = responsiveNumbers0;
  }
  else {
      var getNumber = 1;  
  }

  return getNumber;
}