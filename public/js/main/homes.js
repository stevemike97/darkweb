(function($) {
    "use strict";
    var $window = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll <= 50) {
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
        } else {
            $("header").removeClass("fixedHeader").addClass("scrollHeader");

        }
    });
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    $(document).ready(function() {

        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "30 Oct 2022 00:01:00",
                        format: "on"
                    });
                }
            });
        }

    	new Chart(document.getElementById("chart1"), {
    		"type": "line",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "M&T",
                    "Navy Federal",
                    "P.N.C",
                    "R.B.C",
                    "Scotia",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        14,
                        11,
                        13,
                        14,
                        13, 
                        12, 
                        14,
                        10
                    ],
    				"borderColor": "rgb(255, 255, 255, 0.56)",
                    "backgroundColor":  "rgba(255, 255, 255, 0.1)", 
    			}]
    		},
    		"options": {}
    	});

    	new Chart(document.getElementById("chart2"), {
    		"type": "bar",
    		"data": {
    			"labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "M&T",
                    "Navy Federal",
                    "P.N.C",
                    "R.B.C",
                    "Scotia",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
    				"data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        14,
                        11,
                        13,
                        14,
                        13, 
                        12, 
                        14,
                        10
                    ],
    				"fill": false,
    				"backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(245, 222, 179, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(255, 172, 172, 0.85)",
                        "rgba(244, 119, 66, 0.85)",
                        "rgba(233, 237, 4, 0.85)",
                        "rgba(271, 134, 207, 0.85)",
                        "rgba(209, 50, 48, 0.85)"
                    ],
    				"borderColor": [
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)",
                        "rgba(255, 255, 255, 0.7)"
                    ],
    				"borderWidth": 1
    			}]
    		},
    		"options": {
    			"scales": {
    				"yAxes": [{
    					"ticks": {
    						"beginAtZero": true
    					}
    				}]
    			}
    		}
    	});

    	new Chart(document.getElementById("chart3"), {
    		"type": "pie",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "M&T",
                    "Navy Federal",
                    "P.N.C",
                    "R.B.C",
                    "Scotia",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        14,
                        11,
                        13,
                        14,
                        13, 
                        12, 
                        14,
                        10
                    ],
                    "backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(245, 222, 179, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(255, 172, 172, 0.85)",
                        "rgba(244, 119, 66, 0.85)",
                        "rgba(233, 237, 4, 0.85)",
                        "rgba(271, 134, 207, 0.85)",
                        "rgba(209, 50, 48, 0.85)"
                    ],
                    "borderColor": [
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)"
                    ],
    			}]
    		}
    	});

        new Chart(document.getElementById("chart4"), {
    		"type": "doughnut",
    		"data": {
                "labels": [
                    "Bank of America", 
                    "Barclays",
                    "Chase", 
                    "Chime", 
                    "Citi", 
                    "Huntington",
                    "M&T",
                    "Navy Federal",
                    "P.N.C",
                    "R.B.C",
                    "Scotia",
                    "Truist",
                    "Wells Fargo",
                    "Woodforest"
                ],
    			"datasets": [{
    				"label": "Logs Available",
                    "data": [
                        11, 
                        10,
                        16, 
                        20,
                        17,
                        17,
                        14,
                        11,
                        13,
                        14,
                        13, 
                        12, 
                        14,
                        10
                    ],
                    "backgroundColor": [
                        "rgba(3, 169, 245, 0.85)", 
                        "rgba(245, 222, 179, 0.85)",
                        "rgba(0, 115, 173, 0.85)",
                        "rgba(71, 88, 143, 0.85)", 
                        "rgba(250, 183, 2, 0.85)", 
                        "rgba(208, 173, 85, 0.85)", 
                        "rgba(73, 192, 208, 0.85)",
                        "rgba(22, 160, 134, 0.85)", 
                        "rgba(134, 188, 66, 0.85)", 
                        "rgba(255, 172, 172, 0.85)",
                        "rgba(244, 119, 66, 0.85)",
                        "rgba(233, 237, 4, 0.85)",
                        "rgba(271, 134, 207, 0.85)",
                        "rgba(209, 50, 48, 0.85)"
                    ],
                    "borderColor": [
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)",
                        "rgba(255, 255, 255, 0.42)"
                    ],
    			}]
    		}
    	});

        $('.countup').counterUp({
            delay: 30,
            time: 7000
        });

    });
    function toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    ;var navbar_init = function() {
        $('.switcher-setting').on('click', function() {
            toggleFullScreen();
            return false;
        });
    };
    navbar_init();
}
)(jQuery);

function changeImage() {
    var image = document.getElementById('theIcon');
    if(image.classList.contains('fa-toggle-on')){
        image.classList.remove('fa-toggle-on')
        image.classList.add('fa-toggle-off');
    } else if(image.classList.contains('fa-toggle-off')){
        image.classList.remove('fa-toggle-off')
        image.classList.add('fa-toggle-on');
    }
}

$(document).ready(function() {
    "use strict";
    $('#example').dataTable();    
    $('#example2').dataTable();    
});



! function(g) {
    "use strict";
    var c = g(window);
    c.on("load", function() {
        g(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), g(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);
