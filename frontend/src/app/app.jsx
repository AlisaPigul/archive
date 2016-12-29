/**
 * Created by rlapin on 11/14/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import {LoginForm, AboutComponent, QueryComponent,Header} from "./components";
import DevTools from "./components/devTools";
import {createStore} from "redux";
import {appReducer} from "./reducers";
import configureStore from "./store/configureStore"
import {Provider} from 'react-redux';
import {Router, Route, Redirect, IndexRoute, browserHistory, hashHistory} from "react-router";
import {showLogin} from "./actions/loginActions";


const isProduction = true;

let store = configureStore();
class App extends React.Component {

    onLogin() {
        this.setState({
            showLoginForm: true
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false
        }

    }

    render() {
        const arr = [<Header onLogin={this.onLogin.bind(this)} key="header"/>,
            <LoginForm key="loginForm"/>];
        return (

            <div id="app">
                <div>
                    {arr}
                    {this.props.children}
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
store.dispatch(showLogin());
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