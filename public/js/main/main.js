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


        $('#services-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            dots: true,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 10
                },
                992: {
                    items: 3,
                    margin: 10
                },
                1200: {
                    items: 5,
                    margin: 10
                }
            }
        });

        if ($("#rev_slider_2").length !== 0) {
			var tpj = jQuery;
			var revapi2;
			tpj(document).ready(function() {
				if (tpj("#rev_slider_2").revolution == undefined) {
					revslider_showDoubleJqueryError("#rev_slider_2");
				} else {
					revapi2 = tpj("#rev_slider_2").show().revolution({
                        sliderLayout: "fullscreen",
                        delay: 12e3,
                        responsiveLevels: [4096, 1024, 778, 430],
                        gridwidth: [1370, 1024, 778, 430],
                        gridheight: 600,
                        hideThumbs: 10,
                        fullScreenAutoWidth: "on",
                        dots: true,
                        fullScreenOffsetContainer: ".rev-offset",
                        navigation: {
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: !1
                            },
                            arrows: {
                                enable: !0,
                                style: "hermes",
                                tmp: '<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 0,
                                    v_offset: 0
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 0,
                                    v_offset: 0
                                },
                                hide_onleave: false,
								hide_onmobile: false,
                            },

                            // arrows: {
                            //     enable: !0,
                            //     style: "metis",
                            //     tmp: "",
                            //     rtl: !1,
                            //     hide_onleave: false,
							// 	hide_onmobile: false,
                            //     hide_under: 0,
                            //     hide_over: 9999,
                            //     hide_delay: 200,
                            //     hide_delay_mobile: 1200,
                            //     left: {
                            //         container: "slider",
                            //         h_align: "left",
                            //         v_align: "center",
                            //         h_offset: 20,
                            //         v_offset: 0
                            //     },
                            //     right: {
                            //         container: "slider",
                            //         h_align: "right",
                            //         v_align: "center",
                            //         h_offset: 20,
                            //         v_offset: 0
                            //     }
                            // },


                            bullets: {
                                style: "",
                                style: "hesperiden",
                                enable: 1,
                                hide_onmobile: false,
                                hide_onleave: false,
                                direction: "horizontal",
                                space: 12,
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 30,
                                tmp: ""
                            }
                        },
                        parallax: {
                            type: "scroll",
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                            origo: "enterpoint",
                            speed: 400,
                            bgparallax: "on",
                            disable_onmobile: "on"
                        },
                        spinner: "spinner4"
					});
				}
			});
		}

    });
    $window.on("load", function() {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: 'swing',
            scrollTime: 600,
            activeClass: 'active',
            onPageChange: null,
            topOffset: -70
        });
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        var $gallery = $('.gallery').isotope({});
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });
        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
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

    });
}
)(jQuery);

$('#exampleModal').on('show.bs.modal', function (event) {
    
    "use strict";

    var logsContainer =  document.getElementsByClassName('gallery')[0];
    var addToCartButtons = logsContainer.getElementsByClassName('butn');
    var modal = $(this)

    for(var i = 0; i <addToCartButtons.length; i++){
    var btn = addToCartButtons[i];
    btn.addEventListener('click', addToCartClicked);
    }

    function addToCartClicked(event){
        var btn = event.target;
        var price = btn.innerText;
        var image = btn.parentElement.parentElement.children[0].children[1].src;
        var balance = btn.parentElement.parentElement.children[0].children[0].innerText;
        var website = btn.parentElement.children[0].innerText;
        var info1 = btn.parentElement.children[1].innerText;
        var info2 = btn.parentElement.children[2].innerText;
        var info3 = btn.parentElement.children[3].innerText;
        var info4 = btn.parentElement.children[4].innerText;
        var info5 = btn.parentElement.children[5].innerText;
        var info6 = btn.parentElement.children[6].innerText;
        var account = btn.parentElement.children[7].innerText;
        
        modal.find(".modal-title").text("Balance: " + balance);
        modal.find(".money").text(price);
        modal.find(".website p").text(website);
        modal.find(".info1 p").text(info1);
        modal.find(".info2 p").text(info2);
        modal.find(".info3 p").text(info3);
        modal.find(".info4 p").text(info4);
        modal.find(".info5 p").text(info5);
        modal.find(".info6 p").text(info6);
        modal.find(".modal-img").attr("src", image);
        modal.find(".account p").text(account);
        
    }
})

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