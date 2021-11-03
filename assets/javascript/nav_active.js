$(document).ready(function () {
  $(".nav a").click(function (e) {
    $(".nav .active").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });
});