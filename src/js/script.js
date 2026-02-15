$(document).ready(function () {
  $(".responsive-menu").on("click", function () {
    $(".responsive-menu-container").animate({
        right: '0',
    });
  });

  $(".responsive-menu-btn-close").on("click", function () {
    $(".responsive-menu-container").animate({
        right: '-100%',
    });
  });
});
