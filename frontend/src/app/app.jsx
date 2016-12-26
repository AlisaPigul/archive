/**
 * Created by rlapin on 11/14/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Header, Content, Footer, LoginForm, AboutComponent, QueryComponent} from "./components";
import DevTools from "./components/devTools";
import {createStore} from "redux";
import {appReducer} from "./reducers";
import configureStore from "./store/configureStore"
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRoute, browserHistory, hashHistory} from "react-router";


const isProduction = true;

let store = configureStore();
console.log(store.getState())
class App extends React.Component {

    onLogin() {
        this.setState({
            showLoginForm: true
        });
    }

    constructor() {
        super();
        this.state = {
            showLoginForm: false
        }

    }

    render() {
        const arr = [<Header onLogin={this.onLogin.bind(this)} key="header"/>,
            <LoginForm show={this.state.showLoginForm} key="loginForm"/>];
        return (

            <div id="app">
                <div>
                    {arr}
                </div>
                <div>
                    <DevTools/>
                </div>

            </div>
        )
    };
}

class TestComponent extends React.Component {
    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="query" component={QueryComponent}/>
                <Route path="about" component={AboutComponent}/>
                <Route path="*" component={TestComponent}/>
            </Route>

        </Router>
    </Provider>
    , document.body);