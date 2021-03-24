import React, { Component } from 'react';
import {
    Link,
    Redirect
  } from "react-router-dom";
import './Student.css';
import CollapsibleComponent from './CollapsibleComponent';
import CollapsibleHead from './CollapsibleHead';
import CollapsibleContent from './CollapsibleContent';

export default class Student extends Component { 

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
        console.log(props);
    }


    componentDidMount() {
        let path = window.location.pathname.split("/");
        let id = path[path.length - 1];
        console.log(id);

        const urlStudent = `http://localhost:3001/student/${id}`;
        fetch(urlStudent)
            .then(res => res.json())
            .then(student => {
                const urlMilestone = `http://localhost:3001/milestones/${student[0].id}`;
                fetch(urlMilestone)
                    .then(res => res.json())
                    .then(milestones => {
                        this.setState({ student: student[0], milestones: milestones, isLoading: false });
                        console.log(this.state.student);
                        console.log(this.state.milestones);
                    })
            })
    }

    // Currently uses the current User's name instead of the student's name.
    // need to add id to student object and do a /Student/:id route to pull the right data
    render() {

        if(this.props.currentUser === null) {
            return <Redirect to="/"/>
        }

        if (this.state.isLoading) {
            return null;
        }

        const sortedMilestones = this.state.milestones.sort((a,b) => a.status-b.status);

        let count = 0;

        sortedMilestones.forEach((milestone) => {
            console.log(milestone);
            if(milestone.status===3){
                count+=1;
            }
        });

        console.log("count", count);
        let width = (count/14) * 100;
        let setWidth = width +"%";

        return (
            <div>
                <div class="w-full flex space-x-2">
                    <h1 class="w-10/12 text-scarlet m-5 text-4xl">{this.state.student.last_name}, {this.state.student.first_name}</h1>
                    <Link class="bg-scarlet text-white py-2 px-6 rounded-3xl h-1/2 mt-5" to="/update">Update Milestones</Link>
                </div>
                <div id="progressBar" >
                    <div id="bar" style={{width: setWidth}}></div>
                </div>
                <div>
                    <h2 class="pt-5 w-10/12 text-black m-5 text-4xl">
                        Milestones
                    </h2>
                </div>
                <CollapsibleComponent class="m-5  p-5 text-black font-bold text-center text-lg bg-gray-400 bg-opacity-30 grid grid-cols-4 gap-5">
                    {sortedMilestones.map((milestone) => {
                        let color = ""
                        if(milestone.status === 0) {
                            color = "bg-red-600";
                        } else if(milestone.status === 1) {
                            color = "bg-yellow-500";
                        } else if(milestone.status === 2) {
                            color = "bg-gray-500";
                        } else if(milestone.status === 3) {
                            color = "bg-green-500";
                        }

                        return (
                            <div>
                                <CollapsibleHead class="pb-5 pl-5 bg-white rounded-lg">
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
        );
    }
}