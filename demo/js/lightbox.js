(function($){

	var $overlay=$("<div class='overlay'></div>");
	var $overlayImg=$("<img src='' class='overlay-img'>");
	var $overlayText=$("<p class='overlay-text'></p>");
	$overlay.append($overlayImg);
	$overlay.append($overlayText);
	$('body').append($overlay);

	$.fn.lightbox = function(){
		this.click(function(){

			if(!$(this).is('a') && !$(this).hasClass('lightbox-link'))
				return 'Clicked item is not a link with class .lightbox-link';

			$overlay.css('display','flex').hide().fadeIn();
			$overlayImg.attr('src',$(this).children('img').attr('src'));
			$overlayText.text($(this).children('img').attr('alt'));
			$('body').css('overflow','hidden');		

			$($overlay).on('click',function(){
				$(this).fadeOut();
				$('body').css('overflow','auto');
			});
		});
	}
})(jQuery);




