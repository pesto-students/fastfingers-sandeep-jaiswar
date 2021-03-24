import React, { Component } from 'react';
import GameLogo from '../../images/keyboard.svg';
import Form from '../Form/Form';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginGrid">
        <div className="login">
          <center className=""><img src={GameLogo} height="100px" width="100px" alt="Logo is not Renering" /></center>
          <center className="fast-fingers">fast fingers</center>
          <div className="">
            <span className="Line-1"></span><span className="">the ultimate typing game</span><span className="Line-1"></span>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Login;
