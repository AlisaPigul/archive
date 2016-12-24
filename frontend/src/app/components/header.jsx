import React from "react";
/**
 * @author rlapin
 */
import {NavigationMenu} from "./navigationMenu";

export class Header extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <header>
                <h2>Архив патентов изобретений</h2>
                <div className="menu-panel">
                    <NavigationMenu/>
                    <div className="login">
                        <a href="#signin">Войти</a>
                    </div>
                </div>
            </header>
        )
    }
}