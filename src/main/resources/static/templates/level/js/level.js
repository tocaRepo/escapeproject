
$(document).ready(async function () {
  $("#overlay").show();
  $("#loading-spinner").show();
  var singleGameResponse = await getGame(gameTracker);

  loadHbsTemplate("templates/hbs/level/level.hbs", "level", { gameTracker: gameTracker, level: singleGameResponse.levels[levelTracker], nextLevel: Number(Number(levelTracker) + 1) })
  $("#loading-spinner").hide();
  $("#overlay").hide();


});

async function validateAnswer(gameid, levelid) {
  var answer = $("#answer").val();
  if (answer == null || answer == "") {
    $("#answerFeedback").html("really? try something!");
    return;
  }
  var answerResponse = await isAnswerCorrect(gameid, levelid, answer);
  if (answerResponse.isCorrect) {
    $("#continue").show();
  } else {
    $("#continue").hide();
  }
  $("#answerFeedback").html(answerResponse.message);
}
