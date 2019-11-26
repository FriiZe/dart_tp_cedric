const { Player } = require('./Player')
const scanf = require('scanf')

class ThreeHundredAndOne {
    constructor(playerList){
        this.playerList = playerList
        this.actualScoreByPlayer = []
    }

    init(){
        for(let i = 0; i < this.playerList.length; i++){
            this.actualScoreByPlayer[i] = 301
        }
    }

    launchThreeHundredAndOne(){
        this.init()
        this.ThreeHundredAndOneGameLoop()
    }

    ThreeHundredAndOneGameLoop(){
        while(1){
            let winner = false
            if (winner){
                break;
            }
            for(let i = 0; i < this.playerList.length; i++){
                console.log("Cest le tour de " + this.playerList[i].name + "\n")
                if (winner){
                    break;
                }
                for(let j = 0; j < 3; j++){
                    if (winner){
                        break;
                    }
                    console.log("flechette n° " + (j+1) + "(Score actuel : " + this.actualScoreByPlayer[i] + "\n")
                    console.log("Quel est le score obtenu par ta flechette ? \n ")
                    let input = scanf("%d")
                    let isDouble = false
                    console.log("Etait ce un simple un double ou un triple ? (1/2/3) \n")
                    switch(scanf("%d")){
                        case 1 :
                            if(this.actualScoreByPlayer[i] - input <= 1){
                                console.log("Ton tir est annulé car sinon tu n'aurai jamais pu gagner\n")
                            }else{
                                this.actualScoreByPlayer[i] -= input
                            }
                            break;
                        case 2 :
                            if (this.actualScoreByPlayer[i] - (2*input) < 0){
                                console.log("Tu as tapé trop fort mon petit :)\n")
                            }else if(this.actualScoreByPlayer[i] - 2*input === 1){
                                console.log("Ton tir est annulé car sinon tu n'aurai jamais pu gagner")
                            }else{
                                this.actualScoreByPlayer[i] -= 2*input
                                if(this.actualScoreByPlayer[i] === 0){
                                    console.log("OUIIIIIIII " + this.playerList[i].name + "a gagné")
                                    winner = true
                                    break;
                                }
                            }
                            break;
                        case 3 :
                            if(this.actualScoreByPlayer[i] - 3*input <= 1){
                                console.log("Ton tir est annulé car sinon tu n'aurai jamais pu gagner\n")
                            }else{
                                this.actualScoreByPlayer[i] -= 3*input
                            }
                            break;
                    }
                }
                console.log("Le tour de " + this.playerList[i].name + " est fini\n")
            }
        }
    }
}

module.exports = {ThreeHundredAndOne}