import React from 'react';
import loader from '../images/loader.gif'

function Spinner() {
    return (
        <div id="spinner">
            <img height="25px" width="25px" src={loader} alt="loading..."/>
        </div>
    )
}

export default Spinner
