import React, { Component } from 'react';
import './index.css';

export default class MilestoneContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
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
        if(!this.state.expanded){
            return(
                <div class="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-2 justify-items-start">
                        {
                            this.props.milestones.map(milestone => {
                                let color = ""
                                if(milestone.status === 0) {
                                    color = "incomplete";
                                } else if(milestone.status === 1) {
                                    color = "inprogress";
                                } else if(milestone.status === 2) {
                                    color = "unstarted";
                                    return null;
                                } else if(milestone.status === 3) {
                                    color = "complete";
                                    return null;
                                }
                                    
                                return(
                                    <div class="flex">
                                        <span className="w-6 h-6 rounded-full mx-2" id={color}></span>
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
                            this.props.milestones.map(milestone => {
                                let status = ""
                                if(milestone.status === 0) {
                                    status = "incomplete";
                                } else if(milestone.status === 1) {
                                    status = "inprogress";
                                } else if(milestone.status === 2) {
                                    status = "unstarted";
                                } else if(milestone.status === 3) {
                                    status = "complete";
                                }
                                    
                                return(
                                    <div class="flex">
                                        <span className="w-6 h-6 rounded-full mx-2" id={status}></span>
                                        <div class="w-24 overflow-hidden">{milestone.name}</div>
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