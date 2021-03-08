import React, { Component } from 'react';
import {
    Link,
    Redirect
  } from "react-router-dom";
import './Student.css';


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

        const milestones = {
            "Initial meeting with advisor": 1,
            "One page executive summary": 1,
            "PICO-T question": 1,
            "Committee discussion with advisor and selection": 1,
            "Pre-Professional Exam meeting with full committee": 1,
            "Final Professional Exam document sent to committee": 0,
            "Application for Professional Exam due in Gradforms": 0,
            "Discuss Manuscript vs. multiple document format with committee": 0,
            "Complete HSRD form with advisor": 0,
            "Apply to graduate in Gradforms": 0,
            "Schedule DNP Final Defense": 0,
            "Committee informal meeting": 0,
            "Complete DNP Final Project Defense": 0,
            "Knowledge Bank submission": 0
        }
        var count = 0;

        return (
            <div>
                <div class="w-full flex space-x-2">
                    <h1 class="w-10/12 text-scarlet m-5 text-4xl">{this.state.student.last_name}, {this.state.student.first_name}</h1>
                    <Link class="bg-scarlet text-white py-2 px-6 rounded-3xl h-1/2 mt-5" to="/update">Update Milestones</Link>
                </div>
                <div class="w-full flex space-x-14 mx-auto justify-center">
                    {this.state.milestones.map((milestone) => {
                        console.log(milestone);
                        if(milestone.status === 1) {
                            return (
                                <div class="group justify-center z-10">
                                    <div class="w-12 h-12 border-2 border-black rounded-full bg-gray-600"></div>
                                    <p class="opacity-0 group-hover:opacity-100 fixed">{milestone.description}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div class="group justify-center z-10">
                                    <div class="w-12 h-12 border-2 border-black rounded-full bg-white"></div>
                                    <p class="opacity-0 group-hover:opacity-100 fixed">{milestone.description}</p>
                                </div>
                            )
                        }
                    })}
                    <div style={{width: "90%"}} class="w-11/12 border-0 border-b-2 fixed h-6 right-20 border-gray-600"></div>
                </div>
                <div id="container">
                    <div id="first">
                        {Object.entries(milestones).reverse().map(([milestone, done]) => {
                            if(done===1 && count===0){
                                count = 1;
                                return (
                                    <div class="circle">
                                        <p >Previous Milestone: <br></br></p>
                                        <div class="milestone">
                                            <p >{milestone}</p>
                                        </div>
                                    </div>
                                )
                            } else return null;
                        })} 
                    </div>
                    <div id="second">
                        {Object.entries(milestones).map(([milestone, done]) => {
                            if(done===0 && count===1){
                                count = 0;
                                return (
                                    <div class="circle">
                                        <p >Upcoming Milestone: <br></br></p>
                                        <div class="milestone">
                                            <p >{milestone}</p>
                                        </div>
                                    </div>
                                )
                            } else return null;
                        })} 
                    </div>
                </div>
            </div>
        );
    }
}