import React, { Component } from 'react';
import Checklist from './Checklist';

export default class Advisor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        //This will be an api call to the mock data server later
        const url = "./Data/MOCK_DATA.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var visibleStudents = data.slice(0, 10); //Only store first 10 students in the state
                this.setState({ students: visibleStudents });
                console.log(this.state.students);
            })
    }

    render() {
        return (
            <div class="m-5">
                {this.state.students.map(student =>
                    <div class="bg-white border-2 p-6 m-5 rounded-md shadow-lg">
                        <h2 class="text-3xl text-scarlet">{student.first_name} {student.last_name}</h2>
                        <Checklist />
                    </div>
                )}
            </div>
        )
    }
}