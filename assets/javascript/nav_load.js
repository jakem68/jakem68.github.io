// load navbar
$(document).ready(function () {
  $("#nav-placeholder").load("nav.html", function () {
    $("#nav-placeholder").trigger("navReady");
  });
});

// when loaded check which anchor href matches the
// loaded url and make active
let active_set = false;
$("#nav-placeholder").on("navReady", function () {
  $(".nav a").each(function () {
    if (window.location.href === $(this).prop("href")) {
      $(this).addClass("active");
      active_set = true;
    }
  });
  if (active_set === false) {
    $(".nav a.default").addClass("active");
  }
});
