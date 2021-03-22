import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import PlayButton from "../../images/playbtn.svg";

function LoginForm() {
    const history = useHistory();
    const [userName,setUserName] = useState('');
    const [error,setError] = useState(false);
    const [selectedDifficultyLevel,setSelectedDifficultyLevel] = useState('Easy');
    const DifficultyArray = ['Easy','Medium','Hard'];
    const startGame = (e) => {
        e.preventDefault();
        if(userName.length>0 && selectedDifficultyLevel){
            setError(false)
            sessionStorage.setItem('USER',userName);
            sessionStorage.setItem('DIFFICULY',selectedDifficultyLevel);
            history.push("/game");
        }else{
            setError(true)
        }
    }

    return (
        <form id="loginform" onSubmit={startGame}>
            {error && <p className="errorMsg">Name is Mandatory</p>}
            <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="ENTER YOUR NAME" id="name-input" />
            <select id="difficultyLevel" value={selectedDifficultyLevel} onChange={e=>setSelectedDifficultyLevel(e.target.value)}>
                {DifficultyArray.map(val=>(<option key={val}>{val}</option>))}
            </select>
            <button type="submit" className="loginBtn"> <span><img src={PlayButton} width="25px" height="25px" alt="playbutton" /></span><span className="start-game-text">Start Game</span> </button>
        </form>
    )
}

export default LoginForm
