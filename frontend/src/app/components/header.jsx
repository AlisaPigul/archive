import React from "react";
/**
 * @author rlapin
 */
import {NavigationMenu} from "./navigationMenu";
import {connect} from "react-redux";
import {Link} from "react-router";

let Header = ({dispatch, auth}) => {

    return (

        <header>
            <h2>Архив патентов изобретений</h2>
            <div className="menu-panel">
                <NavigationMenu/>
                {auth &&
                <div className="patent">
                    <Link to="/patent">Добавление патента</Link>
                </div>}
                <div className="login">
                    <Link to="/login">Войти</Link>
                </div>
            </div>
        </header>
    )
};
function mapStateToProps(state) {
    return {
        auth: state.loginState.auth
    }
}

Header = connect(mapStateToProps)(Header);
export default Header;