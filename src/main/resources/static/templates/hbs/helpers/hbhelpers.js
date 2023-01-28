Handlebars.registerHelper('notEmpty', function(str) {
    return str && str !== '' || str==null || str==undefined;
  });


Handlebars.registerHelper('answersVar', function (options) {
    correctAnswers = options.data.root.level.correctAnswer;
    wrongAnswers = options.data.root.level.wrongAnswer;
    return;
  });