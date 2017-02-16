
$(document).ready(function() {
	$('#test').audThumb({
		margin: 10,
		responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        }
      }
	});
});