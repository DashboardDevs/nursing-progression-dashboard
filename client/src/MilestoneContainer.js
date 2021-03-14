import React, { Component } from 'react';
import './index.css';

export default class MilestoneContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.student != this.props.student){
            this.collapseMenu()
        }
    }

    expandMenu(e){
        this.setState({
            expanded : true
        })
    }

    collapseMenu(e){
        this.setState({
            expanded : false
        })
    }
    
    render(){

        var SampleMilestones = {
            'Milestone 1' : 1,
            'Milestone 2' : 2,
            'Milestone 3' : 1,
            'Milestone 4' : 1,
            'Milestone 5' : 1,
            'Milestone 6' : 2,
            'Milestone 7' : 1,
            'Milestone 8' : 3,
            'Milestone 9' : 4,
            'Milestone 10' : 4,
        }

        if(!this.state.expanded){
            return(
                <div class="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-2 justify-items-start">
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==2){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="incomplete"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==3){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="inprogress"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    <button class="self-end mx-8 w-8 rounded-xl h-8 bg-red-400 focus:outline-none select-none" onClick={this.expandMenu.bind(this)}>V</button>
                </div>
            )
        } else {
            return(
                <div class="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-2 justify-items-start">
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==2){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="incomplete"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==3){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="inprogress"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==4){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="null"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                        {
                            Object.keys(SampleMilestones).map(milestone =>
                                {
                                    if(SampleMilestones[milestone]==1){
                                        return(
                                            <div class="flex">
                                                <span class="bg-gray-400 w-6 h-6 rounded-full mx-2" id="complete"></span>
                                                <div class="w-24">{milestone}</div>
                                            </div>
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    <button class="self-end mx-8 w-8 rounded-xl h-8 bg-red-400 focus:outline-none select-none" onClick={this.collapseMenu.bind(this)}>^</button>
                </div>
            )
        }

    }
}