import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        //TODO: Do something with the submitted username and password
        e.preventDefault();
    }
    
    render() {
        return (
            <div id="login-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type="text" name="username" onChange={this.handleInputChange} placeholder="Username"/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" onChange={this.handleInputChange}/>
                    </label>
                    <div className="action-buttons">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}