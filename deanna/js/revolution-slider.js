$(function () {
    "use strict";




    $(document).ready(function () {

        // Slider Video
        $('.intro-Rev_Video').revolution({
            sliderType: "hero",
            delay: 9000,
            startwidth: 1170,
            startheight: 500,
            fullScreen: "on",
            forceFullWidth: "on",
            minFullScreenHeight: "320",
            touchenabled: "off",
        });

        // Slider Dark Light
        var revslider_two = $('.intro-RevSlider');
        revslider_two.revolution({
            delay: 10000,
            hideThumbs: 10,
            responsiveLevels:[2048,1024,778,480], 
            gridwidth:[1140,800,750,480],
            gridheight:[600,600,980,700],             
            hideTimerBar: "on",
            fullWidth: "on",
            fullScreen: "on",
            fullScreenOffsetContainer: "",
            navigationStyle: "preview2",
            navigationType: "none",
            parallax:{
               type:"scroll",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"enterpoint",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            }            
        });

        // Header color "dark" "light  |-------------------------------------------------------"
        revslider_two.bind("revolution.slide.onchange", function (e, data) {

            var color = $(this).find('li').eq(data.slideIndex - 1).data('slide');

            if (color == 'dark-slide') {
                $('#header').addClass('header').removeClass('header-light');
                $('#header').removeClass('header-default');
            }
            if (color == 'light-slide') {
                $('#header').addClass('header-light').removeClass('header-dark');
                $('#header').removeClass('header-default');
            }
            if (color == 'default-slide') {
                $('#header').removeClass('header-dark');
                $('#header').removeClass('header-light');
                $('#header').addClass('header');
            }
            // console.log("rev slide color: " + color);

        });


    });




});