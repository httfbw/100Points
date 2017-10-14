var currentScreenshot = 1;

$(window).ready(function functionName() {
  setInterval(function () {
    $('#smartphone').fadeOut(500, function () {
      if (currentScreenshot == 1) {

        $('#smartphone').attr('src', '/static/img/screenshot2.png');
        currentScreenshot = 2;
      } else {
        $('#smartphone').attr('src', '/static/img/screenshot1.png');
        currentScreenshot = 1;
      }
    });

    $('#smartphone').fadeIn(500);
  }, 5000);
});
