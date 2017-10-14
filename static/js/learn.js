var vocabulary;
var step = 0;
var points = 0;
url = 'https://171373d7.ngrok.io';

$(document).ready(function () {
  // Post data to api
  $.ajax({
    type: 'GET',
    url: url + '/api/vocabulary/',
  }).done(function (data) {
    vocabulary = data;

    $('#question').text(vocabulary[step].question);
  });

  $('#continue').click(function () {
    var answer = $('#input-answer').val();
    var rightAnswer = vocabulary[step].answer;

    if (answer == rightAnswer) {
      $('#answer').html('Richtig');
      $('#answer').css('color', 'rgb(48, 180, 43)');

      // Increase points
      points += 10;

    } else {
      $('#answer').html('Falsch: ' + rightAnswer);
      $('#answer').css('color', 'rgb(125, 27, 26)');
    }

    // Increase step
    step++;

    if (step == 10) {
      // No more questions available
      $('#interrogation').hide();
      $('#answer').html('Punkte: ' + points);
      $('#answer').css('color', 'rgb(68, 150, 130)');
    } else {
      // Set next one
      $('#question').text(vocabulary[step].question);
      $('#input-answer').val('');
    }

  });
});
