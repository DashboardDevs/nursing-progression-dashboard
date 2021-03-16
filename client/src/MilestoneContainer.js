import React, { Component } from 'react';
import './index.css';

export default class MilestoneContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            isLoading: true
        }
    }

    componentDidMount() {
        const urlMilestone = `http://localhost:3001/milestones/${this.props.student}`;
            fetch(urlMilestone)
                .then(res => res.json())
                .then(milestones => {
                    this.setState({ milestones: milestones, isLoading: false });
                    console.log(this.state.milestones);
                });
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
        if(this.state.isLoading) {
            return null;
        }

        if(!this.state.expanded){
            return(
                <div class="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-2 justify-items-start">
                        {
                            this.state.milestones.map(milestone => {
                                let color = ""
                                if(milestone.status === 0) {
                                    color = "bg-red-600";
                                } else if(milestone.status === 1) {
                                    color = "bg-yellow-500";
                                } else if(milestone.status === 2) {
                                    color = "bg-gray-500";
                                    return null;
                                } else if(milestone.status === 3) {
                                    color = "bg-green-500";
                                    return null;
                                }
                                    
                                return(
                                    <div class="flex">
                                        <span className={`${color} w-6 h-6 rounded-full mx-2`}></span>
                                        <div class="w-24 truncate">{milestone.name}</div>
                                    </div>
                                )
                            })
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
                            this.state.milestones.map(milestone => {
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
                                    
                                return(
                                    <div class="flex">
                                        <span className={`${color} w-6 h-6 rounded-full mx-2`}></span>
                                        <div class="w-24">{milestone.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button class="self-end mx-8 w-8 rounded-xl h-8 bg-red-400 focus:outline-none select-none" onClick={this.collapseMenu.bind(this)}>^</button>
                </div>
            )
        }

    }
}