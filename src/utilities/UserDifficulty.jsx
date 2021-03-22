import React from 'react';
import GamePad from "../images/gamepad.svg";

function UserDifficulty({userDifficulty}) {
    const DIFFICULY = sessionStorage.getItem('DIFFICULY');
    return (
        <div className="userDifficulty">
            <img src={GamePad} width="25px" height="25px" alt='gamepad'/>
            <h2>LEVEL : {DIFFICULY||'DIFFICULY'}</h2>
        </div>
    )
}

export default UserDifficulty
