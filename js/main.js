// pop sign
$(document).ready(function() {
    $('.viewport').mouseenter(function(e) {
            $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('span').fadeOut(200);
    });
});

// isotope
$( document ).ready(function() {
     var $container = $('.isotope');
    $('#filters button').click(function(){
        var $this = $(this);
        if ( !$this.hasClass('is-checked') ) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({  itemSelector: '.item', filter: selector });
        return false;
    });
});

//pop menu
$(document).ready(function(){
	var touch = $('#mobile-nav');
		var menu = $('.main-navigation');
		 
		$(touch).on('click', function(e) {
		  e.preventDefault();
		  menu.slideToggle();
		});
		$(window).resize(function(){
		   var wid = $(window).width();
		  if(wid > 768 && menu.is(':hidden')) {
		      menu.removeAttr('style');
		  }
		});
});

// slider
$(document).ready(function(){
    $('.bxslider').bxSlider({
    nextText: '',
    prevText: '',
    touchEnabled: false
      });         
});


//clamping header
$(document).ready(function() {
    var RBStickyNav = $('.RBsticky-element').offset().top;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > RBStickyNav) {
            $('.RBsticky-element').addClass('RBSticky');
        } else {
            $('.RBsticky-element').removeClass('RBSticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
