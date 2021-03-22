import React, { useState } from 'react';
import StopWatch from "../../utilities/StopWatch";
import Score from "../../utilities/Score";
import ScoreBoard from "../../utilities/ScoreBoard";
import Wrapper from "../../utilities/Wrapper";
import GameName from "../../utilities/GameName";
import StopGame from "../../utilities/StopGame";
import UserName from "../../utilities/UserName";
import UserDifficulty from "../../utilities/UserDifficulty";
import './Game.css';
import { useHistory  } from 'react-router-dom';

function Game() {
    const history = useHistory();
    const [scoreArray,setScoreArray] = useState([]);
    return (
        <Wrapper>
            <div className="game">
                <div className="left-content">
                    <div className="item"><UserName /></div>
                    <div className="item"><UserDifficulty /></div>
                    <div className="item scoreboard">
                        <ScoreBoard scoreArray={scoreArray}/>
                    </div>
                    <button className="stopgame-btn" onClick={()=>history.push('/result')}>
                        <StopGame /> 
                    </button>
                </div>
                <div className="main-content">
                    <div className="game-content">
                        <StopWatch setScoreArray={setScoreArray}/>
                        <h1>WINDOW</h1>
                        <input type="text" placeholder="ENTER TEXT" id="entered-text"/>
                    </div>
                </div>
                <div className="right-content">
                    <div className="item"><GameName /></div>
                    <div className="item"><Score /></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Game
