//Animations_scroll_anm
jQuery(function ($) {
    var anm = $(".fade_anm");
    $(window).on("scroll", function () {
        $(anm).each(function () {
            var start = $(this).offset().top;
            var scroll_sc = $(window).scrollTop();
            var range = $(window).height();
            if (scroll_sc > start - range + 180) {
                $(this).addClass("sc_anm");
            }
        });
    });
});