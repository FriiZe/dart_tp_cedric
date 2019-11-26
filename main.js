const { Player } = require('./Classes/Player')
const { AroundTheWorld } = require('./Classes/AroundTheWorld')
const { ThreeHundredAndOne } = require('./Classes/ThreeHundredAndOne')
const scanf = require('scanf')

function initMainGame(){
    console.log("Entrez le nombre de joueurs :")
    let nbPlayers = scanf('%d')
    console.log("Choisissez le mode de jeu (1 : ATW / 2 : 301 / 3 : Cricket)")
    let gameMode = scanf('%d')
    initGame(nbPlayers, gameMode)
}

function initGame(nbPlayers, gameMode){
    let players = []
    let game = null
    for(let i = 0; i < nbPlayers; i++){
        console.log("Veuillez entrer le nom du joueur " + (i+1) + " :")
        let playerName = scanf('%s')
        players.push(new Player(playerName))
    }
    switch(gameMode){
        case 1 :
            game = new AroundTheWorld(players)
            game.LaunchAroundTheWorld()
            break;
        case 2 :
            game = new ThreeHundredAndOne(players)
            game.launchThreeHundredAndOne()
        case 3 : 
            console.log('game mode 3 : ' + players)
            break;
        default : 
    }
}

initMainGame();