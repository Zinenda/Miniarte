$(document).ready(function(){
  M.AutoInit();
  $('.slider').slider();

  var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
  });
});