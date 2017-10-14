var vocabulary;
var step = 0;
var points = 0;
var url = 'https://171373d7.ngrok.io';

$(document).ready(function () {
  // Post data to api
  $.ajax({
    type: 'GET',
    url: url + '/api/vocabulary/',
  }).done(function (data) {
    vocabulary = data;

    // Set first question
    $('#question').text(vocabulary[step].question);
  });

  $('#continue').click(function () {
    continueInterrogation();
  });

  $('#input-answer').keypress(function (event) {
    // Bind press enter
    if (event.which === 13) {
        continueInterrogation();
    }
  });

  function continueInterrogation() {
    // Get user answer and right answer
    var answer = $('#input-answer').val();
    var rightAnswer = vocabulary[step].answer;

    // Show answer
    $('#answer').css('display', 'block');

    // Right answer
    if (answer == rightAnswer) {
      $('#answer').html('Richtig');
      $('#answer').css('color', 'rgb(48, 180, 43)');

      // Increase points
      points += 10;

    } else {
      // Wrong answer
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

      $('#whats-your-name #points').text(points);
      $('#whats-your-name').show();
    } else {
      // Set next one
      $('#question').text(vocabulary[step].question);
      $('#input-answer').val('');
    }
  }

  function submitName() {
    $('#whats-your-name').hide();
    $('#statistics').show();

    // Post data to api
    $.ajax({
      data: {
        name: $('#input-name').val(),
        points: points,
      },
      type: 'POST',
      url: url +  '/api/statistics/',
    }).done(function (data) {
      if (data.error) {
        // TODO: Show error
      } else {
        // For every statistic
        for (i = 0; i < data.length; i++) {
          // Check whether it is the personal statistic
          if (data[i].name == $('#input-name').val()) {
            // Highlight personal statistic
            var isPersonalStatistic = 'id="personal-statistic" ';
          } else {
            var isPersonalStatistic = '';
          }

          // Add statistic to list
          var statisticField = '<div ' + isPersonalStatistic + 'class="statistic-field">';
          statisticField += '<p class="statistic-name">' + data[i].name + '</p>';
          statisticField += '<p class="statistic-points">' + data[i].points  + '</p>';
          statisticField += '</div>';
          $('#statistics').append(statisticField);
        }
      }
    });
  }

  $('#input-name').keypress(function (event) {
    // Bind press enter
    if (event.which === 13) {
      submitName();
    }
  });

  $('#name-submit').click(function () {
    submitName();
  });
});
