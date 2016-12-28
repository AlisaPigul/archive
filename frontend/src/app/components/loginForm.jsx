import React from "react";


export class LoginForm extends React.Component {
    constructor(props,state){
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

        console.log(this.props.show);
        return (
            <div id="wrapper" className={this.props.show ? 'visible' : ''}>

                <form className="login-form" onSubmit={this.handleSubmit}>
                        <input type="text"  placeholder="Input your login" value={this.state.value} onChange={this.handleLoginChange}/>
                        <input type="password" placeholder="Input your password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <input type="submit" value={'Login'}/>
                </form>
            </div>
        )
    }
}
