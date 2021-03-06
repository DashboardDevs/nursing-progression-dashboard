import React, { Component } from 'react';
import Checklist from './Checklist';
import { Link, Redirect } from 'react-router-dom';

export default class Advisor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        //Fetch student data from database
        const url = "http://localhost:3001/student"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var visibleStudents = data.slice(0, 10); //Only store first 10 students in the state
                this.setState({ students: visibleStudents });
            })
    }

    render() {

        if(this.props.currentUser === null) {
            return <Redirect to="/"/>
        }

        return (
            <div class="m-5">
                {this.state.students.map(student =>
                    <div class="bg-white border-2 p-6 m-5 rounded-md shadow-lg">
                        <Link class="text-3xl text-scarlet" to="/student">{student.first_name} {student.last_name}</Link>
                        <Checklist />
                    </div>
                )}
            </div>
        )
    }
}