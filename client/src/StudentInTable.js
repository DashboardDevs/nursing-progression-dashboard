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

    componentDidUpdate(prevProps){
        if(prevProps.student != this.props.student){
            const urlMilestone = `http://localhost:3001/milestones/${this.props.student.id}`;
            fetch(urlMilestone)
                .then(res => res.json())
                .then(milestones => {
                    this.setState({ milestones: milestones, isLoading: false });
                    console.log(this.state.milestones);
                });
        }
    }
    

    render(){


        if(this.state.isLoading) {
            return null;
        } else {
            var count = 0;
            this.state.milestones.map(milestone => {
                if (milestone.status === 3){
                    count++
                }
            })
            return(
                <div class="flex flex-col border mb-2 w-full p-2 bg-white rounded-lg">
                    <div class="flex items-center">
                        <Link class="bg-gray-200 w-36 text-center font-semibold py-1 rounded-lg" to={{pathname: `/student/${this.props.student.id}`}}>{this.props.student.nameDotNumber}</Link>
                            <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full">
                            {/* Progress Bar */}
                            {
                            }
                            <div class={`bg-green-500 h-full w-${count}/14 rounded-full`}></div>
                            </div>
                    </div>
                    <div class="bg-gray-200 w-50 text-left font-semibold py-1 rounded-lg pl-6 mt-2">Expected Graduation Date: {this.props.student.graduation_date.slice(5,7)}/{this.props.student.graduation_date.slice(8,10)}/{this.props.student.graduation_date.slice(0,4)}</div>
                    <MilestoneContainer milestones = {this.state.milestones} student={this.props.student.id}/>
                </div>
            )
        }
    }
}