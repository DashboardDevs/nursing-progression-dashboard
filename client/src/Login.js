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
        let last_name = this.state.username.split(".")[0];
        let dot_number = this.state.username.split(".")[1];

        const url = `http://localhost:3001/login?last_name=${last_name}&dot_number=${dot_number}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // This should only ever return a single row which is the correct account
                let currentUser = data[0];
                currentUser.isAdvisor = currentUser.perms === 1;
                currentUser.isAdmin = currentUser.perms === 2;
                this.props.handleUserLogin(currentUser);
            })

        e.preventDefault();
    }
    
    render() {

        if (!!this.props.currentUser && (this.props.currentUser.isAdvisor || this.props.currentUser.isAdmin)) {
            return <Redirect to={{pathname: `/advisor/${this.props.currentUser.id}`}}></Redirect>
        } else if (!!this.props.currentUser) {
            return <Redirect to={{pathname: `/student/${this.props.currentUser.id}`}}/>
        }

        return (
            <div>
                <form className="mt-10 mx-auto p-5 w-1/3 h-1/3 flex flex-col bg-gray-300 rounded-sm border border-gray-500" onSubmit={this.handleSubmit}>
                    <label className="flex flex-row">
                        <span className="flex-grow">Username:</span>
                        <span className="flex-grow"></span>
                        <input className="flex-grow rounded-sm border border-gray-500 px-1" type="text" name="username" onChange={this.handleInputChange} placeholder="lastname.#" autoFocus/>
                    </label>
                    <label className="flex flex-row my-5">
                        <span className="flex-grow">Password:</span>
                        <span className="flex-grow"></span>
                        <input className="flex-grow rounded-sm border border-gray-500 px-1" type="password" name="password" onChange={this.handleInputChange}/>
                    </label>
                    <div className="w-full flex flex-row-reverse">
                        <button className="bg-scarlet text-white py-2 px-10 rounded-md hover:bg-dark-scarlet" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}