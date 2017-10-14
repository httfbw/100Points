var currentScreenshot = 1;

$(window).ready(function functionName() {
  setInterval(function () {
    $('#smartphone').fadeOut(700, function () {
      if (currentScreenshot == 1) {

        $('#smartphone').attr('src', '/static/img/screenshot2.png');
        currentScreenshot = 2;
      } else {
        $('#smartphone').attr('src', '/static/img/screenshot1.png');
        currentScreenshot = 1;
      }
    });

    $('#smartphone').fadeIn(700);
  }, 5000);
});
