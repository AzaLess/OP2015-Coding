
$(document).ready(function() {

	$('.tm-cat a i img').imgCenter({scaleToFit:false});

	$('.bx-slider').bxSlider({
			pager: false,
			maxSlides: 6,
			minSlides: 2,
			moveSlides: 1,
			slideWidth: 144,
			touchEnabled:true,
			nextText: '',
			prevText: ''
	 });

	/* placeholder */
	$('input[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();

	
	/* input highlight */
	$('.auto-inp input').focus(function() {
	  $(this).parent().addClass('i-light');
	}).blur(function() {
	  $(this).parent().removeClass('i-light');
	}).blur();


});
