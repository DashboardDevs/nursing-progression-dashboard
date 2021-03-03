import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Student.css';


export default class Student extends Component {

    render() {

        const milestones = {
            "Initial meeting with advisor": 3,
            "One page executive summary": 3,
            "PICO-T question": 1,
            "Committee discussion with advisor and selection": 0,
            "Pre-Professional Exam meeting with full committee":0,
            "Final Professional Exam document sent to committee": 2,
            "Application for Professional Exam due in Gradforms": 0,
            "Discuss Manuscript vs. multiple document format with committee": 2,
            "Complete HSRD form with advisor": 2,
            "Apply to graduate in Gradforms": 2,
            "Schedule DNP Final Defense": 2,
            "Committee informal meeting": 2,
            "Complete DNP Final Project Defense": 2,
            "Knowledge Bank submission": 2
        }
        const sortedMilestones = Object.fromEntries(
            Object.entries(milestones).sort(([,a],[,b]) => a-b)
        );

        var count = 0;

        for (const [key, val] of Object.entries(milestones)){
            if(val==3){
                count+=1;
            }
        }

        var width = (count/14) * 100;
        console.log(width);

        return (
            <div>
                <div class="w-full flex space-x-2">
                    <h1 class="w-10/12 text-scarlet m-5 text-4xl">Bernard, Cole</h1>
                    <Link class="bg-scarlet text-white p-2 px-6 rounded-3xl h-1/2 mt-5" to="/update">Update Milestones</Link>
                </div>
                <div id="progressBar" >
                    <div id="bar"></div>
                </div>
                <div>
                    <h2 class="pt-5 w-10/12 text-black m-5 text-4xl">
                        Milestones
                    </h2>
                </div>
                <div class="m-5 grid grid-cols-4 gap-5 p-5 text-black font-bold text-center text-lg bg-gray-400 bg-opacity-30">
                        {Object.entries(sortedMilestones).map((milestone) => {
                            if(milestone[1] == 0) {
                                return (
                                        <div class="pb-5 pl-5 bg-white rounded-lg">
                                            <div class="my-3.5 circle bg-red-600 align-middle float-left"></div>
                                            <div class="w-10/12 float-right">{milestone[0]}</div>
                                        </div>
                                )
                            }else if(milestone[1] == 1) {
                                return (
                                    <div class="pb-5 pl-5 bg-white rounded-lg">
                                        <div class="my-3.5 circle bg-yellow-500 align-middle float-left"></div>
                                        <div class="w-10/12 float-right">{milestone[0]}</div>
                                    </div>
                                )
                            }else if(milestone[1] == 2) {
                                return (
                                    <div class="pb-5 pl-5 bg-white rounded-lg">
                                        <div class="my-3.5 circle bg-gray-500 align-middle float-left"></div>
                                        <div class="w-10/12 float-right">{milestone[0]}</div>
                                    </div>
                                )
                            }else {
                                return (
                                    <div class="pb-5 pl-5 bg-white rounded-lg">
                                        <div class="my-3.5 circle bg-green-500 align-middle float-left"></div>
                                        <div class="w-10/12 float-right">{milestone[0]}</div>
                                    </div>
                                )
                            }
                        })}
                </div>
                
            </div>
        );
    }
}