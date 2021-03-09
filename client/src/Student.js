import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Student.css';
import CollapsibleComponent from './CollapsibleComponent';
import CollapsibleHead from './CollapsibleHead';
import CollapsibleContent from './CollapsibleContent';

export default class Student extends Component {

    render() {

        const milestones = {
            "Initial meeting with advisor": 3,
            "One page executive summary": 3,
            "PICO-T question": 3,
            "Committee discussion with advisor and selection": 3,
            "Pre-Professional Exam meeting with full committee":0,
            "Final Professional Exam document sent to committee": 1,
            "Application for Professional Exam due in Gradforms": 0,
            "Discuss Manuscript vs. multiple document format with committee": 2,
            "Complete HSRD form with advisor": 2,
            "Apply to graduate in Gradforms": 2,
            "Schedule DNP Final Defense": 2,
            "Committee informal meeting": 2,
            "Complete DNP Final Project Defense": 2,
            "Knowledge Bank submission": 2
        }

        const descriptions = {
            "Initial meeting with advisor" : "Discuss topics such as: curriculum plan, compliance, milestones for full time v. part time students, the handbook, DNP project ideas and processes, immersion focus and hours, and program trajectory.",
            "One page executive summary": "This should include a summary of immersion (clinical summary, setting, interests) and PICO-T question progress",
            "PICO-T question": "Synthesis and outcome tables, literature review, paragraph about intervention, best practice recommendation",
            "Committee discussion with advisor and selection": "implementation strategy, data collection",
            "Pre-Professional Exam meeting with full committee": "a minimum of one formal meeting with your committee is strongly suggested.\nAtleast one month prior to exam",
            "Final Professional Exam document sent to committee": "2 weeks prior to exam",
            "Application for Professional Exam due in Gradforms": "due in gradforms, need to be approved by advisor\nhttps://gradforms.osu.edu/\n2 weeks prior to exam",
            "Discuss Manuscript vs. multiple document format with committee": "committee members sign approval in the professional examination in Gradforms\nAfter completeing professional exam",
            "Complete HSRD form with advisor": "discuss any other approvals (feasibility committee, data use, etc.)\nhttps://u.osu.edu/dnpnursinghandbook2020/human-subjects-research-determination-procedures \nAfter completing professional exam",
            "Apply to graduate in Gradforms": "https://gradforms.osu.edu/\nOne term prior to graduation",
            "Schedule DNP Final Defense": "https://u.osu.edu/dnpnursinghandbook2020/final-project/dnp-final-project-presentations-and-defense-procedures/",
            "Committee informal meeting": "This is good for practice, but not required\nPrior to final defense",
            "Complete DNP Final Project Defense": "Committee members sign approval in Gradforms\nhttps://gradsch.osu.edu/calendar/graduation  \nBy deadline of term of graduation",
            "Knowledge Bank submission": "https://u.osu.edu/dnpnursinghandbook2020/knowledge-bank-submission/\nFollowing successful defense"
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
        var setWidth = width +"%";

        return (
            <div>
                <div class="w-full flex space-x-2">
                    <h1 class="w-10/12 text-scarlet m-5 text-4xl">Kaes, Bary</h1>
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
                        {Object.entries(sortedMilestones).map((milestone) => {
                            if(milestone[1] == 0) {
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-white rounded-lg">
                                            <div class="my-3.5 circle bg-red-600 align-middle float-left"></div>
                                            <div class="w-10/12 float-right">{milestone[0]}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent class="bg-gray-400 bg-opacity-30">
                                            <p >{Object.entries(descriptions).map((desc) => {
                                                if(milestone[0]==desc[0]){
                                                    return(
                                                        <div>{desc[1]}</div>
                                                    )
                                                }
                                            })}
                                            </p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            }else if(milestone[1] == 1) {
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-white rounded-lg">
                                            <div class="my-3.5 circle bg-yellow-500 align-middle float-left"></div>
                                            <div class="w-10/12 float-right">{milestone[0]}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent>
                                            <p >{Object.entries(descriptions).map((desc) => {
                                                if(milestone[0]==desc[0]){
                                                    return(
                                                        <div>{desc[1]}</div>
                                                    )
                                                }
                                            })}
                                            </p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            }else if(milestone[1] == 2) {
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-white rounded-lg">
                                            <div class="my-3.5 circle bg-gray-500 align-middle float-left"></div>
                                            <div class="w-10/12 float-right">{milestone[0]}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent>
                                            <p >{Object.entries(descriptions).map((desc) => {
                                                if(milestone[0]==desc[0]){
                                                    return(
                                                        <div>{desc[1]}</div>
                                                    )
                                                }
                                            })}
                                            </p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            }else {
                                return (
                                    <div>
                                        <CollapsibleHead class="pb-5 pl-5 bg-white rounded-lg">
                                            <div class="my-3.5 circle bg-green-500 align-middle float-left"></div>
                                            <div class="w-10/12 float-right">{milestone[0]}</div>
                                        </CollapsibleHead>
                                        <CollapsibleContent>
                                            <p >{Object.entries(descriptions).map((desc) => {
                                                if(milestone[0]==desc[0]){
                                                    return(
                                                        <div>{desc[1]}</div>
                                                    )
                                                }
                                            })}
                                            </p>
                                        </CollapsibleContent>
                                    </div>
                                )
                            }
                        })}
                </CollapsibleComponent>
                
            </div>
        );
    }
}