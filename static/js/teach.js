$(document).ready(function () {
  $('#submit-teach-form').click(function () {

    // Post data to api
    $.ajax({
      data: {
        question1: $('#question-1').val(),
        answer1: $('#answer-1').val(),
        question2: $('#question-2').val(),
        answer2: $('#answer-2').val(),
        question3: $('#question-3').val(),
        answer3: $('#answer-3').val(),
        question4: $('#question-4').val(),
        answer4: $('#answer-4').val(),
        question5: $('#question-5').val(),
        answer5: $('#answer-5').val(),
        question6: $('#question-6').val(),
        answer6: $('#answer-6').val(),
        question7: $('#question-7').val(),
        answer7: $('#answer-7').val(),
        question8: $('#question-8').val(),
        answer8: $('#answer-8').val(),
        question9: $('#question-9').val(),
        answer9: $('#answer-9').val(),
        question10: $('#question-10').val(),
        answer10: $('#answer-10').val(),
      },
      type: 'POST',
      url: '/api/vocabulary/',
    }).done(function (data) {
      if (data.error) {
        $('#alert-error').fadeIn(500);
        $('#alert-error').css('display', 'block');
        $('#alert-error p').html(data.error);
      } else {
        $('#alert-success').fadeIn(500);
        $('#alert-success').css('display', 'block');
        $('#alert-success p').html('Vokabeln wurden erfolgreich geändert!');
      }
    });
  });

  // Close alert if button (x) is pressed
  $('.closebtn').click(function () {
    $(this).parent().fadeOut(500);
  });
});
