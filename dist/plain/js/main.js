"use strict";
$(document).ready(function() {
  svg4everybody(),
    $(".main-slider").owlCarousel({
      items: 1,
      nav: !0,
      mouseDrag: !1,
      margin: 1e3,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsive: {
        0: { dots: !0, margin: 30 },
        1120: { dots: !1, margin: 1e3 }
      }
    }),
    $(".review-slider").owlCarousel({
      items: 1,
      nav: !0,
      margin: 30,
      responsive: { 0: { dots: !0 }, 1120: { items: 1, dots: !1 } }
    }),
    $(".detail-slider").owlCarousel({
      margin: 24,
      nav: !0,
      responsive: {
        1120: { items: 3 },
        726: { loop: !0, center: !0, items: 2 },
        0: { items: 1 }
      }
    }),
    $(".content-slider").owlCarousel({
      items: 4,
      margin: 22,
      nav: !0,
      responsive: {
        0: { items: 1, dots: !0 },
        726: { loop: !0, center: !0, items: 2 },
        1120: { items: 4 }
      }
    }),
    $(".float-slider").owlCarousel({ items: 1, nav: !0 }),
    $(".over-tours").owlCarousel({
      items: 4,
      margin: 30,
      nav: !0,
      responsive: {
        0: { items: 1 },
        726: { items: 2, center: !0, margin: 30 },
        1220: { items: 4 }
      }
    }),
    $(".burger-button").on("click", function(e) {
      $(".header-menu").toggleClass("active"), $(this).toggleClass("active");
    }),
    $("body").on("click", function(e) {
      var t = document.getElementsByClassName("header-menu")[0],
        s = document.getElementsByClassName("burger-button")[0];
      e.target !== t &&
        e.target !== s &&
        ($(t).removeClass("active"), $(s).removeClass("active"));
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
      $(".content-images").owlCarousel({
        items: 1,
        margin: 30,
        responsive: { 726: { loop: !0, center: !0, items: 2 } }
      }),
      $(".collective-row").owlCarousel({
        items: 1,
        loop: !0,
        margin: 28,
        autoWidth: !0,
        center: !0,
        responsive: { 726: { margin: 100 } }
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
