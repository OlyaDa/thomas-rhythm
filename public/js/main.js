$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
		prevArrow:'<button class="slick-arrow slick-prev"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',     
		nextArrow:'<button class="slick-arrow slick-next"> <i class="fa fa-chevron-right" aria-hidden="true"></i> </button>',             

  });
});

$(function(){
	$('.toggle-menu').on('click',function(){
		$('.main-nav').toggleClass('open');
	});
});

