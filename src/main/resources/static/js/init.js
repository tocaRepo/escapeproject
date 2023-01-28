
var levelTracker = 0;
var gameTracker;

$(document).ready(function () {
    loadHtmlPage('templates/home/home.html');

});

function loadLevel(gameId, levelId) {

    gameTracker = gameId;
    levelTracker = Number(levelId);
    loadHtmlPage('templates/level/level.html');

}
