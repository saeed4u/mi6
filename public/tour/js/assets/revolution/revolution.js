$(document).ready(function () {
    "use strict";
    
	jQuery('#rev_slider_1').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 894,
		navigation: {
			arrows: {
				enable: true,
				style: 'zeus',
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			}
		}
	});



});
