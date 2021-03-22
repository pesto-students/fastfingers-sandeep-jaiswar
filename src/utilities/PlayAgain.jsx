import React from 'react';
import Reload from "../images/reload.svg";

function PlayAgain() {
    return (
        <div className="playAgain">
            <img src={Reload} width="25px" height="25px" alt="cross"/>
            <h2>PLAY AGAIN</h2>
        </div>
    )
}

export default PlayAgain;
