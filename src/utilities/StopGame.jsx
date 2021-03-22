import React from 'react';
import Cross from "../images/cross.svg";

function StopGame() {
    return (
        <div className="stopGame">
            <img src={Cross} width="25px" height="25px" alt="cross"/>
            <h2>STOP GAME</h2>
        </div>
    )
}

export default StopGame
