$(document).ready(function(){
  M.AutoInit();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });
});