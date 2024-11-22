const _state = {
    points : {
        gooogle : 12,
         players : [10, 11]
    }
}


export function getGooglePoints() {
    return _state.points.gooogle
}

/**
 * 
 * @param {number} playerNumber 
 * @returns {number} number of points
 */

export function getPlayersPoints(playerNumber) { 

    const playerIndex = playerNumber - 1;

    if (playerIndex<0 || playerIndex > _state.points.players.length - 1 ) {

        throw new Error ('incorrect player number')
    }

    return _state.points.players[playerIndex]
}