
$(document).ready(function () {
    "use strict";        
    //Mean Menu
    jQuery('header nav').meanmenu({
        meanScreenWidth: "767"
    });
    
            
  /*=========== Scroll to top =========*/
    
     jQuery('.to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });
    
    
    // Contact Form
	
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
		$('#message').hide();
 		$('#submit')
			.after('')
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});

    // Special Package
    $("#reviews_carousel").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : false,
        pagination : true,
    });
    $("#reviews_carousel-02").owlCarousel({
        items :3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 2],
        itemsMobile : [479, 1],
        navigation : true,
        navigationText :["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],
        pagination : false,
    });

    $("#reviews_carousel-03").owlCarousel({
        items :1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : true,
        slideSpeed : 1500,
        navigationText :["", "<i class='flaticon-arrow-point-to-right'></i>"],
        pagination : false
    });

    $("#reviews_carousel_05").owlCarousel({
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : false,
        pagination : true,
    });

    // Special Package
    $("#latest_blog_carousel").owlCarousel({
        items : 2,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [980, 1],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : false,
        pagination : true,
    });
    $("#latest_blog_carousel-3").owlCarousel({
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 2],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : false,
        pagination : true,
    });

    // Special Package
    $("#features_place_carousel").owlCarousel({
        items : 4,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 3],
        itemsMobile : [479, 1],
        navigation : true,
        navigationText :["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-arrow-point-to-right'></i>"],
        pagination : false,
    });

    // Special Package
    $("#home_carousel-04").owlCarousel({
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [980, 3],
        itemsTablet: [768, 1],
        itemsMobile : [479, 1],
        navigation : false,
        navigationText :["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        pagination : true,
        afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('active')

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem + 1)
           .addClass('active')    
        } 
    });


    //Date Picker  
    $( function() {
        $( "#datepicker" ).datepicker();
        $( "#datepicker-2" ).datepicker();
        $( "#datepicker-3" ).datepicker();
        $( "#datepicker-4" ).datepicker();
        $( "#datepicker-5" ).datepicker(); 
        $( "#datepicker-6" ).datepicker();    
    } );  

	//WOW Animate
    new WOW().init();
    
    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 
});

