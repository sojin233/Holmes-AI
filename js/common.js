$(document).ready(function () {
  // button click 위로 올라가게
  $(".up_btn").bind("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 680);
  });

  // nav function
  $(".btn-menu").click(function () {
    if ($(".btn-menu > .ico-nav").hasClass("open")) {
      $(".btn-menu > .ico-nav").removeClass("open");
      $(".nav-mobile").fadeOut();
      $("html").attr("style", "overflow: auto !important");
    } else {
      $(".btn-menu > .ico-nav").addClass("open");
      $(".nav-mobile").fadeIn();
      $(".nav-mobile .content-box > ul > li").removeClass("open");
      $("html").attr("style", "overflow: hidden !important");
    }
  });
  $(".nav-mobile .content-box > ul > li").click(function () {
    $(this).toggleClass("open");
    $(this).siblings().removeClass("open");
  });
});

$(document).ready(function () {
  $(window).on("scroll", fnUpDown);
  fnUpDown(); // 페이지가 로드될 때도 함수를 실행
  function fnUpDown() {
    $(".ani_updown").each(function () {
      var windowHeight = $(window).height();
      var elementTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var elementVisible = 150;

      if (elementTop < windowHeight + scrollTop - elementVisible) {
        $(this).addClass("active");
      }
    });
  }
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".ani_hidden").each(function () {
      var windowHeight = $(window).height();
      var elementTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var elementVisible = 150;

      if (elementTop < windowHeight + scrollTop - elementVisible) {
        $(this).addClass("active");
      }
    });
  });
  // 페이지가 로드될 때도 함수를 실행하여 이미 보이는 텍스트는 활성화
  $(window).scroll();
});
