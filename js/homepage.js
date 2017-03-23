// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

new WOW().init();

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

/*call for quote rotator*/
$( function() {
	$( '#cbp-qtrotator' ).cbpQTRotator();
} );

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 500);
});
$(window).scroll(function(){
	$(".scroll-fade-out").css("opacity", 1 - $(window).scrollTop() / 400);
});

$(function() {
    var body = $("#photos");
    var backgrounds = ['url(img/photos/1.jpg)', 'url(img/photos/2.jpg)', 'url(img/photos/4.jpg)', 'url(img/photos/5.jpg)', 'url(img/photos/6.jpg)', 'url(img/photos/7.jpg)'];
    var current = 0;
    function nextBackground(){
        body.css(
            'background-image',
            backgrounds[current = ++current % backgrounds.length]
        );
        setTimeout(nextBackground, 2500);
    }
    setTimeout(nextBackground, 2500);
       body.css('background-image', backgrounds[0]);
});