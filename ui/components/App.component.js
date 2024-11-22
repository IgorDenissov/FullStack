import { getGooglePoints, getPlayersPoints } from "/../core/strate-manager.js";


export function AppComponent(){
    const element = document.createElement('div');

    const googlePoints = getGooglePoints()
    
    const player1Points = getPlayersPoints(1)
    
    const player2Points = getPlayersPoints(2)


    
    

    element.append( `Player1 : ${player1Points},  Player2 : ${player2Points},  Google : ${googlePoints}`)

    return element;
} 