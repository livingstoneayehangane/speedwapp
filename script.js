//Navbar

$(function () {


  $(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
      $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
      $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
  });


  //sign up form
  $(document).ready(function () {
    $('.forgot-pass').click(function (event) {
      $(".pr-wrap").toggleClass("show-pass-reset");
    });

    $('.pass-reset-submit').click(function (event) {
      $(".pr-wrap").removeClass("show-pass-reset");
    });
  });

});
