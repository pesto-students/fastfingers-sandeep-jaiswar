import React from 'react';
import StopWatch from "../../utilities/StopWatch";
import Score from "../../utilities/Score";
import Wrapper from "../../utilities/Wrapper";
import GameName from "../../utilities/GameName";
import StopGame from "../../utilities/StopGame";
import UserName from "../../utilities/UserName";
import UserDifficulty from "../../utilities/UserDifficulty";
import './Game.css';

function Game() {
    return (
        <Wrapper>
            <div className="game">
                <div className="left-content">
                    <div className="item"><UserName /></div>
                    <div className="item"><UserDifficulty /></div>
                    <div className="item scoreboard">
                        <h4>SCORE BOARD</h4>
                    </div>
                    <div className="item">
                        <StopGame />
                    </div>
                </div>
                <div className="main-content">
                    <div className="game-content">
                        <StopWatch/>
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
