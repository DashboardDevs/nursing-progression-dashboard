import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MilestoneContainer from './MilestoneContainer';

export default class StudentTable extends Component {

    render(){
        let maxShown = 0;

        let processedStudents = this.props.students.map(student => {
            student['nameDotNumber'] = student.last_name+'.'+student.dot_number;
            return student;
        });

        let filteredStudents = processedStudents.filter(s => s.nameDotNumber.toLowerCase().startsWith(this.props.searched.toLowerCase()));
        
        filteredStudents.sort((s1, s2) => {
            return s1.nameDotNumber < s2.nameDotNumber ? -1 : 1;
        });
        let showStudents = filteredStudents.slice(0,10);

        return(
            <div>
                <div class="flex flex-col justify-center items-center rounded-lg bg-gray-200 border mb-4 p-4">
                        {showStudents.map(s => (
                            <div class="flex flex-col border mb-2 w-full p-2 bg-white rounded-lg">
                                <div class="flex items-center">
                                    <Link class="bg-gray-200 w-36 text-center font-semibold py-1 rounded-lg" to={{pathname: `/student/${s.id}`}}>{s.nameDotNumber}</Link>
                                    <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full">
                                        {/* Placeholder Progress Bar */}
                                        <div class="bg-red-300 h-full w-2/5 rounded-full"></div>
                                    </div>
                                </div>
                                <MilestoneContainer/>
                            </div>
                        ))}
                </div>
            </div>
        )
    }

}