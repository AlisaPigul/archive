import React from "react";
import {connect} from "react-redux";
import {hideLogin, successLogin} from "../actions/loginActions";

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
        event.preventDefault();
        this.props.dispatch(hideLogin());
        this.props.dispatch(successLogin());
    }

    render() {
        const {dispatch} = this.props;
        return (
            <div id="wrapper" className={this.props.show ? 'visible' : ''}>


                <form className="login-form" onSubmit={(event)=>this.handleSubmit(event)}>
                        <div className="close-button" onClick={()=>dispatch(hideLogin())}>X</div>
                        <input type="text"  placeholder="Input your login" value={this.state.value} onChange={this.handleLoginChange}/>
                        <input type="password" placeholder="Input your password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <input type="submit" value={'Login'}/>
                </form>
            </div>
        )
    }
}
