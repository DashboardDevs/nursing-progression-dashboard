import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import MilestoneContainer from './MilestoneContainer';

export default class StudentInTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress : 0,
            isLoading: true
        }
    }

    componentDidMount() {
        const urlMilestone = `http://localhost:3001/milestones/${this.props.student.id}`;
            fetch(urlMilestone)
                .then(res => res.json())
                .then(milestones => {
                    this.setState({ milestones: milestones, isLoading: false });
                    console.log(this.state.milestones);
                });
    }
    
    increment_progress() {
        this.setState({
            progress : (this.state.progress + 1)
        })
    }


    render(){


        if(this.state.isLoading) {
            return null;
        } else {
            return(
                <div class="flex flex-col border mb-2 w-full p-2 bg-white rounded-lg">
                    <div class="flex items-center">
                        <Link class="bg-gray-200 w-36 text-center font-semibold py-1 rounded-lg" to={{pathname: `/student/${this.props.student.id}`}}>{this.props.student.nameDotNumber}</Link>
                            <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full">
                            {/* Progress Bar */}
                            {
                                this.state.milestones.map(milestone => {
                                    if (milestone.status === 3){
                                        this.state.progress++
                                    }
                                })
                            }
                            <div class={`bg-green-500 h-full w-${this.state.progress}/14 rounded-full`}></div>
                            </div>
                    </div>
                    <MilestoneContainer student={this.props.student.id}/>
                </div>
            )
        }
    }
}