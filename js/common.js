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
  // 공통 함수로 합치기
  function fnCheckVisibility() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var elementVisible = 150;

    // .ani_updown 클래스 처리
    $(".ani_updown").each(function () {
      var elementTop = $(this).offset().top;
      if (elementTop < windowHeight + scrollTop - elementVisible) {
        $(this).addClass("active");
      }
    });

    // .ani_hidden 클래스 처리
    $(".ani_hidden").each(function () {
      var elementTop = $(this).offset().top;
      if (elementTop < windowHeight + scrollTop - elementVisible) {
        $(this).addClass("active");
      }
    });
  }

  // 스크롤 이벤트 및 페이지 로드 시 함수 실행
  $(window).on("scroll", fnCheckVisibility);
  fnCheckVisibility();
});
