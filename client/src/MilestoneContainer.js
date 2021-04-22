import React, { Component } from 'react';
import './index.css';
import downarrow from './images/DownArrowPNG.png';
import uparrow from './images/UpArrowPNG.png';

export default class MilestoneContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.student !== this.props.student){
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
                <div className="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 w-full justify-items-center md:justify-items-start">
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
                                    <div className="flex h-12 flex-none overflow-hidden" key={milestone.id}>
                                        <span className="flex-none w-6 h-6 rounded-full mx-2" id={color}></span>
                                        <div>{milestone.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="self-end mx-8 w-8 rounded-xl h-8 bg-red-400 focus:outline-none select-none" onClick={this.expandMenu.bind(this)}>
                        <img className="p-2"src={downarrow} alt=""/>
                    </button>
                </div>
            )
        } else {
            return(
                <div className="flex flex-col items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 w-full justify-items-center md:justify-items-start">
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
                                    <div className="flex h-12 flex-none overflow-hidden" key={milestone.id}>
                                        <span className="flex-none w-6 h-6 rounded-full mx-2" id={status}></span>
                                        <p>{milestone.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="self-end mx-8 w-8 rounded-xl h-8 bg-red-400 focus:outline-none select-none" onClick={this.collapseMenu.bind(this)}>
                        <img className="p-2"src={uparrow} alt=""/>
                    </button>
                </div>
            )
        }

    }
}