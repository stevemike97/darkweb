function changeImage() {
    var e = document.getElementById("theIcon");
    e.classList.contains("fa-toggle-on") ? (e.classList.remove("fa-toggle-on"), e.classList.add("fa-toggle-off")) : e.classList.contains("fa-toggle-off") && (e.classList.remove("fa-toggle-off"), e.classList.add("fa-toggle-on"));
}
!(function (e) {
    "use strict";
    var n = e(window);
    function t() {
        var t, l, c;
        (t = e("header").height()), (l = e(".screen-height")), (c = n.height() - t), l.css("height", c);
    }
    e("#preloader").fadeOut("normall", function () {
        e(this).remove();
    }),
        n.on("scroll", function () {
            n.scrollTop() <= 50 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : e("header").removeClass("fixedHeader").addClass("scrollHeader");
        }),
        e(".parallax,.bg-img").each(function (n) {
            e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")");
        }),
        n.resize(function (e) {
            setTimeout(function () {
                t();
            }, 500),
                e.preventDefault();
        }),
        t(),
        e(document).ready(function () {
            e('#example1').dataTable();    
            e(".countup").counterUp({ delay: 25, time: 4900 });
            e('.xzoom5, .xzoom-gallery5').xzoom({tint: '#232323', Xoffset: 15});

            //Integration with hammer.js
            var isTouchSupported = 'ontouchstart' in window;
    
            if (isTouchSupported) {
                //If touch device
                e('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                    var xzoom = e(this).data('xzoom');
                    xzoom.eventunbind();
                });
            } else {
                e('#span-test').bind('click', function(event) {
                    var xzoom = e(this).data('xzoom');
                    xzoom.closezoom();
                    var gallery = xzoom.gallery().cgallery;
                    var i, images = new Array();
                    for (i in gallery) {
                        images[i] = {src: gallery[i]};
                    }
                    e.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                    event.preventDefault();
                });
            }
        });
    e(".switcher-setting").on("click", function () {
        return (
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                ? document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.msExitFullscreen
                    ? document.msExitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen && document.webkitExitFullscreen()
                : document.documentElement.requestFullscreen
                ? document.documentElement.requestFullscreen()
                : document.documentElement.msRequestFullscreen
                ? document.documentElement.msRequestFullscreen()
                : document.documentElement.mozRequestFullScreen
                ? document.documentElement.mozRequestFullScreen()
                : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
            !1
        );
    });
})(jQuery);
