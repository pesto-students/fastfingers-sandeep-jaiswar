import React from 'react';

function ScoreBoard({scoreArray}) {
    return (
        <>
           <h4 className="scoreboard-title">SCORE BOARD</h4> 
           {scoreArray.map(elem=>(<div key={elem}>{elem}</div>))}
        </>
    )
}

export default ScoreBoard
