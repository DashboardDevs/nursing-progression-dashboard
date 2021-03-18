import React, { Component } from 'react';

export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleUserLogout = this.handleUserLogout.bind(this);
    }

    handleUserLogout() {
        this.props.handleUserLogout();
    }
    
    render() {
        return (
            <section>
                <button className="m-2 py-1 px-3 rounded-md bg-scarlet text-white inline-block" onClick={this.handleUserLogout}>Log out</button>
                <hr></hr>
            </section>
        )

    }
}