
$(document).ready(function() {
  $('#test').audThumb({
    margin: 10,
    transitionType: 'fullTransition', // singleTransition/fullTransition
    transitionMod: 'slide',  // slide/fade
    responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        }
      }
  });
});