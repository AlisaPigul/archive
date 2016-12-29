import React from "react";
/**
 * @author rlapin
 */
import {NavigationMenu} from "./navigationMenu";
import {connect} from "react-redux";
import {showLogin} from "../actions/loginActions";

let Header = ({onLogin,dispatch,store}) => {
    return (
        <header>
            <h2>Архив патентов изобретений</h2>
            <div className="menu-panel">
                <NavigationMenu/>
                <div className="login" onClick={()=>dispatch(showLogin())}>
                    <a href="#signin">Войти</a>
                </div>
            </div>
        </header>
    )
};
Header = connect()(Header);
export default Header;