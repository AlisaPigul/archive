import React from "react";


export class LoginForm extends React.Component {
    constructor(props,state){
        super(props);
        debugger
        alert(state);
    }

    render() {

        console.log(this.props.show);
        return (
            <div id="wrapper" className={this.props.show ? 'visible' : ''}>

                <div className="login-form">
                    <input type="text"/>
                    <input type="password"/>
                    <input type="submit" value={'Login'}/>
                </div>
            </div>
        )
    }
}
