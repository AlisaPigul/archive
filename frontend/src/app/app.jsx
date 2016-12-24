/**
 * Created by rlapin on 11/14/16.
 */
import { Router, Route, Link, browserHistory, hashHistory} from 'react-router'
import React from "react";
import ReactDOM from "react-dom";
import {Header, Content, Footer} from "./components";
class App extends React.Component {
    render() {
        const arr = [<Header key="header"/>,<Content key="content"/>,<Footer key="footer"/>];
        return (
            <Router history={hashHistory}>
                <Route path="/">
                    <h1>DSAD</h1>
                </Route>
            </Router>


        )
    };
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);