import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            authenticated: false
        };

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
        this.setState({authenticated: true});
        e.preventDefault();
    }
    
    render() {
        if (this.state.authenticated) {
            return <Redirect to="/dashboard" />
        }

        return (
            <div>
                <form class="mt-10 mx-auto p-5 w-1/3 h-1/3 flex flex-col bg-gray-300 rounded-sm border border-gray-500" onSubmit={this.handleSubmit}>
                    <label class="flex flex-row">
                        <span class="flex-grow">Username:</span>
                        <span class="flex-grow"></span>
                        <input class="flex-grow rounded-sm border border-gray-500 px-1" type="text" name="username" onChange={this.handleInputChange} placeholder="lastname.#"/>
                    </label>
                    <label class="flex flex-row my-5">
                        <span class="flex-grow">Password:</span>
                        <span class="flex-grow"></span>
                        <input class="flex-grow rounded-sm border border-gray-500 px-1" type="password" name="password" onChange={this.handleInputChange}/>
                    </label>
                    <div class="w-full flex flex-row-reverse">
                        <button class="bg-scarlet text-white py-2 px-10 rounded-md hover:bg-dark-scarlet" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}