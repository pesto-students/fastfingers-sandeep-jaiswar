import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlayButton from "../../images/playbtn.svg";

function LoginForm() {
    const [userName,setUserName] = useState('');
    const [selectedDifficultyLevel,setSelectedDifficultyLevel] = useState('Easy');
    const DifficultyArray = ['Easy','Medium','Hard']
    const startGame = (e) => {
        e.preventDefault();
        sessionStorage.setItem('USER',userName);
        sessionStorage.setItem('DIFFICULY',selectedDifficultyLevel);
    }

    return (
        <form id="loginform" onSubmit={startGame}>
            <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="ENTER YOUR NAME" id="name-input" />
            <select id="difficultyLevel" value={selectedDifficultyLevel} onChange={e=>setSelectedDifficultyLevel(e.target.value)}>
                {DifficultyArray.map(val=>(<option key={val}>{val}</option>))}
            </select>
            <button type="submit" onClick={startGame}>
            <NavLink to="/game" className="loginBtn"> <span><img src={PlayButton} width="25px" height="25px" alt="playbutton" /></span><span className="start-game-text">Start Game</span> </NavLink>
            </button>
        </form>
    )
}

export default LoginForm
