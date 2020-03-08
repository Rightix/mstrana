"use strict";
$(document).ready(function() {
  function t() {
    location.href = e;
  }
  var e;
  if (
    (svg4everybody(),
    $(".full-slider").owlCarousel({
      items: 1,
      nav: !0,
      mouseDrag: !1,
      responsive: { 0: { mouseDrag: !0 }, 1040: { mouseDrag: !1 } }
    }),
    $("[data-popup]")
      .on("mouseover", function(e) {
        $(".popup-item").removeClass("active");
        var t = $(this).data("popup"),
          o = ".popup-item.".concat(t);
        $(".popup-item.".concat(t)).addClass("active"), console.log(o);
      })
      .on("mouseleave", function(e) {
        $(".popup-item").removeClass("active");
      }),
    (e = $(".start__castle").attr("href")),
    $(".start__castle").on("click", function(e) {
      e.preventDefault(),
        setTimeout(t, 1e3),
        $(".start-wrapper").addClass("active");
    }),
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
    $(window).width() < 720)
  ) {
    $(".menu__trigger").on("click", function(e) {
      $(this).addClass("active"), $(".main-menu.mobile").addClass("active");
    }),
      $(".mobile-menu__close").on("click", function(e) {
        $(".main-menu.mobile").removeClass("active");
      }),
      $(".history-gallery-list").owlCarousel({
        items: 1,
        center: !0,
        onInitialized: function(e) {
          $(".gallery-counter__current").html("1"),
            $(".gallery-counter__count").html(e.item.count + 1);
        },
        onChanged: function(e) {
          $(".gallery-counter__current").html(e.item.index + 1);
        }
      });
  }
});
