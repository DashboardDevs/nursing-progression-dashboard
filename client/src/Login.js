import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            authenticated: false,
            currentUser: null
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
        //TODO: When Database is set, actually grab the right account / check valid username was provided

        let currentUser = this.state.username === "kaes.15" || this.state.username === "Kaes.15" ? {
            firstname: "Bary",
            lastname: "Kaes",
            dotNumber: 15,
            advisorId: 4,
            isAdvisor: false,
            isAdmin: false
        } :
        {
            firstname: "Michael",
            lastname: "Ackerman",
            dotNumber: 4,
            advisorId: null,
            isAdvisor: true,
            isAdmin: false
        }

        this.setState(
            {
                authenticated: true,
                currentUser: currentUser
            });
        e.preventDefault();
    }
    
    render() {
        if (!!this.state.currentUser && (this.state.currentUser.isAdvisor || this.state.currentUser.isAdmin)) {
            console.log("load dashboard")
            return <Redirect to="/advisor" />
        } else if (!!this.state.currentUser){
            console.log("load student")
            return <Redirect to="/student"/>
        }

        return (
            <div>
                <form className="mt-10 mx-auto p-5 w-1/3 h-1/3 flex flex-col bg-gray-300 rounded-sm border border-gray-500" onSubmit={this.handleSubmit}>
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