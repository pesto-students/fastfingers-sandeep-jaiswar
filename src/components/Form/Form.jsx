import React, { Component } from 'react';
import Playbtn from '../../images/playbtn.svg';
import Input from '../UI/Input/Input';
import Dropdown from '../UI/Dropdown/Dropdown';
import './Form.css';
import {
    withRouter
} from 'react-router-dom';

const PLACE_HOLDER_NAME = "Type Your Name";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficultyLevel: ["Easy", "Medium", "Hard"],
            form: {
                name: "",
                selectedDiffculty: "Easy"
            },
            displayError: false
        }
    }

    nameChangeHandler = (e) => {
        this.setState({ ...this.state, form: { ...this.state.form, name: e.target.value }, displayError: false });
    }

    onSelectHandler = (item) => {
        this.setState({ ...this.state, form: { ...this.state.form, selectedDiffculty: item } })
    }

    formDetails = () => {
        let userName = sessionStorage.getItem('name');
        let name = this.state.form.name;
        let error = false;
        if (name === '') {
            console.log(name);
            if (!userName || userName === '') {
                console.log(userName);
                this.setState({ displayError: true });
                error = true;
            }
        };
        if (!error) {
            if (!userName || userName === '') {
                sessionStorage.setItem("name", this.state.form.name);
            }
            sessionStorage.setItem("selectedDifficulty", this.state.form.selectedDiffculty);
            if (!sessionStorage.getItem('scores')) {
                let temp = [];
                sessionStorage.setItem("scores", JSON.stringify(temp));
            }
            this.props.history.push('/game');
        }
    }
    render() {
        return (
            <div className="loginForm">
                <Input onChangeHandler={this.nameChangeHandler} placeHolder={PLACE_HOLDER_NAME} />
                {this.state.displayError &&
                    <center className="errorMessage">Username is Required</center>
                }
                <Dropdown difficultyLevel={this.state.difficultyLevel} onSelectHandler={(item) => this.onSelectHandler(item)} ref={this.selectedRef} />
                <center onClick={this.formDetails} className="spacer">
                    <div className=""> <span> <img width="25px" height="25px" src={Playbtn} alt="playtbn" /> </span> <span className="start-game">Start Game</span></div>
                </center>
            </div>
        );
    }
}

export default withRouter(Form);
