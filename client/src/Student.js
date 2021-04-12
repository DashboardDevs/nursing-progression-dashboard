import React, { Component } from 'react';
import {
    Link,
    Redirect
} from "react-router-dom";
import './Student.css';
import CollapsibleComponent from './CollapsibleComponent';
import CollapsibleHead from './CollapsibleHead';
import CollapsibleContent from './CollapsibleContent';
import AdvisorNotesComponent from './AdvisorNotesComponent';
import StudentCommitteeList from './StudentCommitteeList';

export default class Student extends Component {

    constructor(props) {
        super(props);
        let path = window.location.pathname.split("/");
        let id = path[path.length - 1];
        this.state = { isLoading: true, id: id };
    }


    componentDidMount() {
        console.log(this.state.id);

        const urlStudent = `http://localhost:3001/student/${this.state.id}`;
        fetch(urlStudent)
            .then(res => res.json())
            .then(student => {
                const urlMilestone = `http://localhost:3001/milestones/${student[0].id}`;
                fetch(urlMilestone)
                    .then(res => res.json())
                    .then(milestones => {
                        this.setState({ student: student[0], milestones: milestones, isLoading: false });
                    })
            })
    }

    // Currently uses the current User's name instead of the student's name.
    // need to add id to student object and do a /Student/:id route to pull the right data
    render() {

        if (this.props.currentUser === null) {
            return <Redirect to="/" />
        }

        if (this.state.isLoading) {
            return null;
        }

        const sortedMilestones = this.state.milestones.sort((a, b) => a.status - b.status);

        let count = 0;

        sortedMilestones.forEach((milestone) => {
            //console.log(milestone);
            if (milestone.status === 3) {
                count += 1;
            }
        });

        //console.log("count", count);
        let width = (count / 14) * 100;
        let setWidth = width + "%";
        //Set the link to the form to the update form for advisors or the request form for students
        let formLink;

        if (this.props.currentUser.perms == 0) {
            return (
                <div class="mt-8">
                    <div class="flex items-center ml-5 mr-5">
                        <h1 class="bg-gray-200 w-2/6 text-center font-semibold py-1 rounded-lg text-4xl">{this.state.student.last_name}, {this.state.student.first_name}</h1>
                        <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full" >
                            <div class="bg-green-500 h-full rounded-full" style={{ width: setWidth }}></div>
                        </div>
                    </div>
                    <div class="flex">
                        <p id="gradDate" class="bg-gray-200 w-2/6 text-left font-semibold py-1 rounded-lg text-xl ml-5 mt-3">Expected Graduation Date: {this.state.student.graduation_date.slice(5, 7)}/{this.state.student.graduation_date.slice(8, 10)}/{this.state.student.graduation_date.slice(0, 4)}</p>
                        <div class="w-4/6">
                            <Link class="float-right bg-scarlet text-white py-2 px-6 rounded-3xl h-2/3 mt-5 mr-6" to={{ pathname: "/request", student: this.state.student }}>Update Milestones</Link>
                        </div>
                    </div>
                    <div class="ml-5 mr-5 mt-3 p-5 bg-gray-200 rounded-lg">
                        <CollapsibleComponent class="m-3  p-5 text-black font-bold text-center text-base bg-white grid grid-cols-4 gap-3">
                            {sortedMilestones.map((milestone) => {
                                let color = ""
                                if (milestone.status === 0) {
                                    color = "bg-red-600";
                                } else if (milestone.status === 1) {
                                    color = "bg-yellow-500";
                                } else if (milestone.status === 2) {
                                    color = "bg-gray-500";
                                } else if (milestone.status === 3) {
                                    color = "bg-green-500";
                                }
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-gray-400 rounded-lg">
                                            <div className={`my-3.5 circle ${color} align-middle float-left`}></div>
                                            <div class="w-10/12 float-right">{milestone.name}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent class="bg-gray-400 bg-opacity-30">
                                            <p>{milestone.description}</p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            })}
                        </CollapsibleComponent>
                    </div>
                    <div>
                        <StudentCommitteeList studentId={this.state.student.id} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div class="mt-8">
                    <div class="flex items-center ml-5 mr-5">
                        <h1 class="bg-gray-200 w-2/6 text-center font-semibold py-1 rounded-lg text-4xl">{this.state.student.last_name}, {this.state.student.first_name}</h1>
                        <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full" >
                            <div class="bg-green-500 h-full rounded-full" style={{ width: setWidth }}></div>
                        </div>
                    </div>
                    <div class="flex">
                        <p id="gradDate" class="bg-gray-200 w-2/6 text-left font-semibold py-1 rounded-lg text-xl ml-5 mt-3">Expected Graduation Date: {this.state.student.graduation_date.slice(5, 7)}/{this.state.student.graduation_date.slice(8, 10)}/{this.state.student.graduation_date.slice(0, 4)}</p>
                        <div class="w-4/6 pr-8">
                            <a class="float-right bg-gray-200 textgray-400 py-2 px-6 rounded-3xl h-2/3 mt-5 mr-6" href="https://login.microsoftonline.com/?whr=buckeyemailosu.onmicrosoft.com" target="_blank">OneDrive</a>
                            <Link class="float-right bg-scarlet text-white py-2 px-6 rounded-3xl h-2/3 mt-5 mr-6" to={{ pathname: "/update", student: this.state.student }}>Update Milestones</Link>
                        </div>
                    </div>
                    <div class="ml-5 mr-5 mt-3 p-5 bg-gray-200 rounded-lg">
                        <CollapsibleComponent class="m-3  p-5 text-black font-bold text-center text-base bg-white grid grid-cols-4 gap-3">
                            {sortedMilestones.map((milestone) => {
                                let color = ""
                                if (milestone.status === 0) {
                                    color = "bg-red-600";
                                } else if (milestone.status === 1) {
                                    color = "bg-yellow-500";
                                } else if (milestone.status === 2) {
                                    color = "bg-gray-500";
                                } else if (milestone.status === 3) {
                                    color = "bg-green-500";
                                }
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-gray-400 rounded-lg">
                                            <div className={`my-3.5 circle ${color} align-middle float-left`}></div>
                                            <div class="w-10/12 float-right">{milestone.name}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent class="bg-gray-400 bg-opacity-30">
                                            <p>{milestone.description}</p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            })}
                        </CollapsibleComponent>
                    </div>
                    <div>
                        <StudentCommitteeList studentId={this.state.student.id} />
                    </div>
                    <div>
                        <AdvisorNotesComponent student={this.state.student} >
                        </AdvisorNotesComponent>
                    </div>
                </div>
            );
        }

    }
}
