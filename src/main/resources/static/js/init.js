
var levelTracker = 0;
var gameTracker;


function loadLevel(gameId, levelId) {

    gameTracker = gameId;
    levelTracker = Number(levelId);
    loadHtmlPage('templates/level/level.html');

}

function loadGame(gameId, levelId) {

    $('#page-top').load("game.html", function () {
        console.log("home loaded");
        gameTracker = gameId;
        levelTracker = Number(levelId);
        loadHtmlPage('templates/level/level.html');
    });



}
