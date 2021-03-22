import React from 'react';
import Wrapper from "../../utilities/Wrapper";
import GameName from "../../utilities/GameName";
import PlayAgain from "../../utilities/PlayAgain";
import UserName from "../../utilities/UserName";
import UserDifficulty from "../../utilities/UserDifficulty";
import { useHistory  } from 'react-router-dom';
import './Result.css';

function Result() {
    const history = useHistory();
    return (
        <Wrapper>
            <div className="result">
                <div className="left-content">
                    <div className="item"><UserName /></div>
                    <div className="item"><UserDifficulty /></div>
                    <div className="item quit" onClick={()=>history.push('/')}>
                        <h2>QUIT</h2>
                    </div>
                </div>
                <div className="main-content">
                    <div className="result-content">
                    <button onClick={()=>history.push('/')}><PlayAgain /></button>
                    </div>
                </div>
                <div className="right-content">
                    <div className="item"><GameName /></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Result
