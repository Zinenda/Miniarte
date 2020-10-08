$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
        height: 640,
        indicators: false
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

	// init Lazy Image Load
	$('.lazy').lazy();
});