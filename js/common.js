$(document).ready(function () {
  // button click 위로 올라가게
  $(".up_btn").bind("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 680);
  });
});
