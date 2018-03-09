var ask = require('readline-sync')


var playTheGame = function() {
    var playerName = ask.question("Hey what's your name?");
    console.log("thanks " + playerName + "! So very nice to meet you!")
    if (playerName === "Dee") { 
        console.log("What's Happening!");
        keepPlaying = false;
    } else if (playerName === 'James'){
        console.log("great! You did it!")
        keepPlaying = false;
    }
}



while (true) {
    playTheGame();
}