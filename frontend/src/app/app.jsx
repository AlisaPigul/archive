/**
 * Created by rlapin on 11/14/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Header, Content, Footer, LoginForm,DevTools} from "./components";
import {createStore} from "redux";
import {appReducer} from "./reducers";
import { Provider } from 'react-redux';


const isProduction = true;

let store = createStore(appReducer);
console.log(store.getState())
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
            <Provider store={store}>
                <div>
                {arr}

                </div>
            </Provider>
        )
    };
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);