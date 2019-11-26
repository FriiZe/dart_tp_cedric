const { Player } = require('./Player')
const scanf = require('scanf')

class AroundTheWorld {
    constructor(playerList){
        this.playerList = playerList
        this.actualScoreByPlayer = []
        this.nextScoreByPlayer = []
    }

    LaunchAroundTheWorld(){
        this.init()
        this.AroundTheWorldGameLoop()
    }

    init(){
        for(let i = 0; i < this.playerList.length; i++){
            this.actualScoreByPlayer[i] = null
            this.nextScoreByPlayer[i] = 1
        }
    }

    AroundTheWorldGameLoop(){
        while(1){
            if (this.winner()){
                break;
            }
            for(let i = 0; i < this.playerList.length; i++){ 
                if (this.winner()){
                    break;
                }    
                console.log("Cest le tour de " + this.playerList[i].name + "\n")
                for(let j = 0; j < 3; j++){
                    if (this.winner()){
                        break;
                    }
                    console.log("Ton objectif est " + this.nextScoreByPlayer[i] + "\n")
                    console.log("Quel score vient d'effectuer " + this.playerList[i].name + " ?\n")
                    let input = scanf("%d")
                    if (input === this.nextScoreByPlayer[i]){
                        this.actualScoreByPlayer[i] = this.nextScoreByPlayer[i]
                        if (this.actualScoreByPlayer[i] === 20){
                            this.nextScoreByPlayer[i] = 25
                        }else{
                            this.nextScoreByPlayer[i] = this.actualScoreByPlayer[i] + 1
                        }
                        console.log("Bravo tu progresses. Ton prochain objectif est " + this.nextScoreByPlayer[i] + "\n")
                    }else{
                        console.log("Retente ta chance a la prochaine flechette :)\n")
                    }
                }
                console.log("Fin du tour de " + this.playerList[i].name + "\n\n")        
            }
        }
    }

    winner(){
        for(let i = 0; i < this.playerList.length; i++){
            if (this.actualScoreByPlayer[i] === 25){
                console.log("OUI OUI OUI OUI OUI !!! CEST GAGNE")
                return true
            }
        }
        return false
    }

}

module.exports = {AroundTheWorld}