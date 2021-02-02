import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log("Submitted");
    }
    
    render() {
        return (
            <div id="login-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input type="text" name="username" placeholder="Username"/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" />
                    </label>
                    <div class="action-buttons">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}