/**
 * Created by rlapin on 11/14/16.
 */
import { Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import React from "react";
import ReactDOM from "react-dom";
import {Header, Content, Footer, LoginForm} from "./components";
class App extends React.Component {

    onLogin(){
        this.setState({
            showLoginForm:true
        });
    }
    constructor(){
        super();
        this.state = {
            showLoginForm: false
        }

    }
    render() {
        const arr = [<Header onLogin={this.onLogin.bind(this)} key="header"/>,<Content key="content"/>,<Footer key="footer"/>, <LoginForm show={this.state.showLoginForm} key="loginForm"/>];
        return (
            <div>
                {arr}
            </div>
        )
    };
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);