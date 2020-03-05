"use strict";
$(document).ready(function() {
  svg4everybody(),
    $(".full-slider").owlCarousel({
      items: 1,
      nav: !0,
      mouseDrag: !1,
      responsive: { 0: { mouseDrag: !0 }, 1040: { mouseDrag: !1 } }
    }),
    $("[data-popup]")
      .on("mouseover", function(e) {
        $(".popup-item").removeClass("active");
        var o = $(this).data("popup"),
          t = ".popup-item.".concat(o);
        $(".popup-item.".concat(o)).addClass("active"), console.log(t);
      })
      .on("mouseleave", function(e) {
        $(".popup-item").removeClass("active");
      }),
    $(".burger-button").on("click", function(e) {
      $(".header-menu").toggleClass("active"), $(this).toggleClass("active");
    }),
    $("body").on("click", function(e) {
      var o = document.getElementsByClassName("header-menu")[0],
        t = document.getElementsByClassName("burger-button")[0];
      e.target !== o &&
        e.target !== t &&
        ($(o).removeClass("active"), $(t).removeClass("active"));
    }),
    $(window).width() < 1024 &&
      ($(".news-item.last:first").removeClass("last"),
      $(".tour-examples-card.more").remove(),
      $(".tour-examples-card.only-xl").remove(),
      $(".tour-examples-row").owlCarousel({
        items: 1,
        responsive: {
          0: { items: 1 },
          726: { items: 2, margin: 30, center: !0, loop: !0 }
        }
      })),
    $(window).width() < 720 &&
      ($(".menu__trigger").on("click", function(e) {
        $(this).addClass("active"), $(".main-menu.mobile").addClass("active");
      }),
      $(".mobile-menu__close").on("click", function(e) {
        $(".main-menu.mobile").removeClass("active");
      }));
});
