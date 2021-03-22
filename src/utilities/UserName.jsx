import React from 'react';
import Person from "../images/person.svg";

function UserName() {
    const User = sessionStorage.getItem('USER');
    return (
        <div className="userName">
            <img src={Person} width="25px" height="25px" alt="person"/>
            <h2>PLAYER_NAME : {User || 'USER'}</h2>
        </div>
    )
}

export default UserName
