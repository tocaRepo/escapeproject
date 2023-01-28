var correctAnswers;
var wrongAnswers;

$(document).ready(async function () {
  $("#overlay").show();
  $("#loading-spinner").show();
  var gamesresponse = await getGames();

  loadHbsTemplate("templates/hbs/game/main.hbs", "games", { games: gamesresponse })
  $("#loading-spinner").hide();
  $("#overlay").hide();


});
