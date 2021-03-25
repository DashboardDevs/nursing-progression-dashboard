import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from './SearchBar';
import StudentTable from './StudentTable';
import ReviewContainer from './ReviewContainer';

export default class Advisor extends Component {

    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.loadStudents = this.loadStudents.bind(this);
        this.state = {
            students: [],
            filterText: ''
        }
    }

    handleSearchChange(text){
        this.setState({filterText: text});
    }

    componentDidMount() {
        this.loadStudents();
    }

    loadStudents() {
        const url = `http://localhost:3001/student/advisor/${this.props.currentUser.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                var visibleStudents = data;
                this.setState({ students: visibleStudents });
                console.log(this.state.students);
            });
    }

    render() {

        if(this.props.currentUser === null || !(this.props.currentUser.isAdvisor || this.props.currentUser.isAdmin)) {
            return <Redirect to="/"/>
        }

        const text = this.state.filterText;
        return (
            <div class="flex flex-row justify-center">
                <div class="flex flex-col mx-2 w-full lg:w-9/12">
                    <div class="grid grid-cols-2">
                        <div class="text-xl font-semibold">Student Milestone Dashboard</div>
                        <div class="flex justify-self-end items-center justify-center bg-gray-200 rounded-full px-8 my-1 text-gray-400">
                            <SearchBar filterText={text} onTextChange={this.handleSearchChange}/>
                        </div>
                    </div>
                    <StudentTable searched={this.state.filterText} students={this.state.students}/>
                </div>
                <div class="hidden lg:flex flex-col w-3/12 mt-8 mx-6">
                    <div class="flex flex-col items-center bg-gray-200 pt-4 rounded-lg max-h-96 overflow-y-hidden">
                        <div class="bg-red-700 rounded-lg w-3/5 text-white font-semibold py-2 text-center text-lg">Pending Reviews</div>
                        <div class="border-t w-9/12 border-gray-300 m-2"></div>
                        <ReviewContainer currentUser={this.props.currentUser} refresh={this.loadStudents}></ReviewContainer>
                    </div>
                </div>
            </div>
        )
    }
}