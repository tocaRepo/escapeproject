
// Load data from the API
var games;
var game;
//var env = "";
var env = "http://localhost:443";
async function getGames() {

    if (games == null) {
        var response = await fetch(env + '/api/game/get/all');
        games = await response.json();

    }
    //return a clone
    return JSON.parse(JSON.stringify(games));
}

async function getGame(id) {

    if (game == null) {
        var response = await fetch(env + '/api/game/get/' + id);
        game = await response.json();

    }
    //return a clone
    return JSON.parse(JSON.stringify(game));
}

async function isAnswerCorrect(gameid, levelid, answer) {


    var response = await fetch(env + '/api/game/get/' + gameid + "/answer?levelId=" + levelid + "&answer=" + answer);
    return await response.json();

}


