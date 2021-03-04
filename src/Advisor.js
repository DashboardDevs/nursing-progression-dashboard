import React, { Component } from 'react';
import Checklist from './Checklist';
import SearchBar from './SearchBar';
import StudentTable from './StudentTable';

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
            <div class="flex justify-center">
                <div class="flex flex-col mx-2 w-3/5">
                    <div class="grid grid-cols-2">
                        <div class="text-xl font-semibold">Student Milestone Dashboard</div>
                        <div class="justify-self-end bg-gray-200 rounded-full my-1 px-16 text-gray-400">
                            <SearchBar/>
                        </div>
                    </div>
                    <StudentTable students={this.state.students}/>
                </div>
            </div>
        )
    }
}