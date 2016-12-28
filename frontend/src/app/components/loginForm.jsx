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
        console.log(event);
        this.setState({value: event.target.value});
        console.log(this.props.value);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.password});
        console.log(this.props.password);
    }

    handleSubmit(event) {
        alert('A login name and a password  were submitted: ' + this.state.value + ', ' + this.state.password);
        event.preventDefault();
    }

    render() {

        console.log(this.props.show);
        return (
            <div id="wrapper" className={this.props.show ? 'visible' : ''}>

                <div className="login-form" onSubmit={this.handleSubmit}>
                    <label>
                        Пользовательское имя:
                        <input type="text" value={this.state.value} onChange={this.handleLoginChange} />
                    </label>
                    <label>
                        Пароль:
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label>
                    <input type="submit" value={'Login'}/>
                </div>
            </div>
        )
    }
}
