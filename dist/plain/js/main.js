"use strict";
$(document).ready(function() {
  svg4everybody(),
    $(".full-slider").owlCarousel({ items: 1, nav: !0, mouseDrag: !1 }),
    $(".burger-button").on("click", function(e) {
      $(".header-menu").toggleClass("active"), $(this).toggleClass("active");
    }),
    $("body").on("click", function(e) {
      var t = document.getElementsByClassName("header-menu")[0],
        o = document.getElementsByClassName("burger-button")[0];
      e.target !== t &&
        e.target !== o &&
        ($(t).removeClass("active"), $(o).removeClass("active"));
    }),
    $(window).width() < 1120 &&
      ($(".tour-examples-card.more").remove(),
      $(".tour-examples-card.only-xl").remove(),
      $(".tour-examples-row").owlCarousel({
        items: 1,
        responsive: {
          0: { items: 1 },
          726: { items: 2, margin: 30, center: !0, loop: !0 }
        }
      }),
      $(".review-block-text").each(function() {
        360 === $(this).height() &&
          $(this)
            .next()
            .show();
      })),
    $(".review-block__more").on("click", function() {
      $(this)
        .prev()
        .css("max-height", "none"),
        $(this).remove();
    });
});
