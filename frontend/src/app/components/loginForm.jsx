import React from "react";
import {connect} from "react-redux";
import {showLogin, hideLogin} from "../actions/loginActions";

@connect(state=> ({
    show: state.loginForm.show
}))
export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({value: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert('A login name and a password  were submitted: ' + this.state.value + ', ' + this.state.password);
        event.preventDefault();
    }

    render() {
        debugger;
        console.log(this.props.show);
        const {dispatch} = this.props;
        return (
            <div id="wrapper" className={this.props.show ? 'visible' : ''}>


                <form className="login-form" onSubmit={()=>dispatch(hideLogin())}>
                        <input type="submit" value={'X'} className="close-button" />
                        <input type="text"  placeholder="Input your login" value={this.state.value} onChange={this.handleLoginChange}/>
                        <input type="password" placeholder="Input your password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <input type="submit" value={'Login'}/>
                </form>
            </div>
        )
    }
}
