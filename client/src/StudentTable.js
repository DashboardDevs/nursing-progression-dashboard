import React, { Component } from 'react';
import StudentInTable from './StudentInTable';

export default class StudentTable extends Component {

    render(){
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
                <div className="flex flex-col justify-center items-center rounded-lg bg-gray-200 border mb-4 p-4">
                        {showStudents.map(s => (
                            <StudentInTable key={s.id} student={s}/>
                        ))}
                </div>
            </div>
        )
    }

}