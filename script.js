$(document).ready(function() {

	console.log('script loaded!');

/*		$('.home').on('click',function(e) {

			$('.column-two').toggle();
			$(this).toggleClass('class1')
		 });
		console.log

});*/

	$('.column-one').click(function(){
		$('.column-two').toggle();

	});

	$('.by-year').click(function(){
		$('.column-three-year').toggle();
	});

	$('.article-one').on ('click',function(){
		$('.article-one').load('cult-of-ugly.html');
	});

	$('.by-title').click(function(){
		$('.column-three-alphabet').toggle();
	});

	$('.section-color').click(function(){
		$('.column-four').toggle();

	});

	$('.column-four').click(function(){
		$('.column-five').toggle();

	});

	$('.column-five').click(function(){
		$('.two-column-text').toggle();

	});


})