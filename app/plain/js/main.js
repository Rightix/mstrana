"use strict";
$(document).ready(function() {
  svg4everybody();
  fullSlider();
  mainPopup();
  startLink();
  function fullSlider() {
    $(".full-slider").owlCarousel({
      items: 1,
      nav: true,
      mouseDrag: false,
      responsive: {
        0: {
          mouseDrag: true
        },
        1040: {
          mouseDrag: false
        }
      }
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
  function mainPopup() {
    $("[data-popup]")
      .on("mouseover", function(e) {
        $(".popup-item").removeClass("active");
        let name = $(this).data("popup");
        let className = `.popup-item.${name}`;
        $(`.popup-item.${name}`).addClass("active");
        console.log(className);
      })
      .on("mouseleave", function(e) {
        $(".popup-item").removeClass("active");
      });
  }

  if ($(window).width() < 1024) {
    $(".news-item.last:first").removeClass("last");
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
  }
  if ($(window).width() < 720) {
    $(".menu__trigger").on("click", function(e) {
      $(this).addClass("active");
      $(".main-menu.mobile").addClass("active");
    });
    $(".mobile-menu__close").on("click", function(e) {
      $(".main-menu.mobile").removeClass("active");
    });

    $(".history-gallery-list").owlCarousel({
      items: 1,
      center: true,
      onInitialized: galleryInit,
      onChanged: galleryChanged
    });
    function galleryInit(e) {
      $(".gallery-counter__current").html("1");
      $(".gallery-counter__count").html(e.item.count + 1);
    }
    function galleryChanged(e) {
      $(".gallery-counter__current").html(e.item.index + 1);
    }
  }

  function startLink() {
    let url = $(".start__castle").attr("href");
    $(".start__castle").on("click", function(e) {
      e.preventDefault();
      setTimeout(moveToLink, 1000);
      $(".start-wrapper").addClass("active");
    });
    function moveToLink() {
      location.href = url;
    }
  }
});
