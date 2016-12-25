import React from "react";



export class LoginForm extends React.Component{
    render(){
        console.log(this.props.show);
        return (
            <div id="wrapper" className={this.props.show?'visible':''}>
                <div className="login-form">

                </div>
            </div>
        )
    }
}
