import React from 'react'

function Score({formattedTime}) {
    return (
        <div>
            <h2>SCORE : {formattedTime || '00:33'}</h2>
        </div>
    )
}

export default Score
