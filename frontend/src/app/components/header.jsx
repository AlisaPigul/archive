import React from "react";
/**
 * @author rlapin
 */
import {NavigationMenu} from "./navigationMenu";
import {connect} from "react-redux";
import {showLogin} from "../actions/loginActions";

let Header = ({onLogin,auth, dispatch,store}) => {
    return (
        <header>
            <h2>Архив патентов изобретений</h2>
            <div className="menu-panel">
                <NavigationMenu/>
                {auth && <div className="patent" >
                    <a href="/patent">Добавление патента</a>
                </div>}
                <div className="login" onClick={()=>dispatch(showLogin())}>
                    <a href="#signin">Войти</a>
                </div>
            </div>
        </header>
    )
};
Header = connect()(Header);
export default Header;