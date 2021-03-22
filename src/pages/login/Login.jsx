import React from 'react';
import Wrapper from "../../utilities/Wrapper";
import Keyboard from "../../images/keyboard.svg";
import LoginForm from "./LoginForm";
import './Login.css';

function Login() {
  return (
    <Wrapper>
      <div className="login">
        <centered-element className="">
          <picture>
            <img src={Keyboard} alt="app-logo" width="100px" height="60px" />
            <h1 className="game-name">fast fingers</h1>
            <div className="slogan"><span className="line"></span>&nbsp;&nbsp;&nbsp;&nbsp;<h5>the ultimate typing game</h5>&nbsp;&nbsp;&nbsp;&nbsp;<span className="line"></span></div>
          </picture>
          <LoginForm/>
        </centered-element>
      </div>
    </Wrapper>
  )
}

export default Login
