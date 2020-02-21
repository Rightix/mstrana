"use strict";
$(document).ready(function() {
  svg4everybody();
  fullSlider();

  function fullSlider() {
    $(".full-slider").owlCarousel({
      items: 1,
      nav: true,
      mouseDrag: false
      // margin: 1000
      // animateOut: "fadeOut"
      // animateIn: "fadeIn"
    });
  }

  mobileMenu();

  function mobileMenu() {
    $(".burger-button").on("click", function(e) {
      $(".header-menu").toggleClass("active");
      $(this).toggleClass("active");
    });
    $("body").on("click", function(e) {
      let menu = document.getElementsByClassName("header-menu")[0];
      let burger = document.getElementsByClassName("burger-button")[0];
      if (e.target !== menu && e.target !== burger) {
        $(menu).removeClass("active");
        $(burger).removeClass("active");
      }
    });
  }

  if ($(window).width() < 1120) {
    $(".tour-examples-card.more").remove();
    $(".tour-examples-card.only-xl").remove();
    $(".tour-examples-row").owlCarousel({
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        726: {
          // autoWidth: true,
          items: 2,
          margin: 30,
          center: true,
          loop: true
        }
      }
    });

    $(".review-block-text").each(function() {
      if ($(this).height() === 360) {
        $(this)
          .next()
          .show();
      }
    });
  }

  $(".review-block__more").on("click", function() {
    $(this)
      .prev()
      .css("max-height", "none");
    $(this).remove();
  });

  /*  $(".form__file input[type=file]").change(function () {
            var filename = $(this).val().replace(/.*\\/, "");
            console.log(filename)
            $(this).siblings(".form__file-name").fadeIn().val(filename);
        });
    */
});
