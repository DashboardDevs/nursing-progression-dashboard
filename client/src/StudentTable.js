import React, { Component } from 'react';
import MilestoneContainer from './MilestoneContainer';

export default class StudentTable extends Component {

    render(){
        var maxShown = 0;
        const names = [];
        {this.props.students.map(student => names.push(student.last_name+'.'+student.dot_number))};
        var filteredNames = [];
        {
            names.filter(name => name.toLowerCase().startsWith(this.props.searched.toLowerCase())).map(filteredName => (
                filteredNames.push(filteredName)
            ))
        }
        filteredNames.sort();
        var showNames = filteredNames.slice(0,10);

        return(
            <div>
                <div class="flex flex-col justify-center items-center rounded-lg bg-gray-200 border mb-4 p-4">
                        {showNames.map(name => (
                            <div class="flex flex-col border mb-2 w-full p-2 bg-white rounded-lg">
                                <div class="flex items-center">
                                    <div class="bg-gray-200 w-36 text-center font-semibold py-1 rounded-lg">{name}</div>
                                    <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full">
                                        {/* Placeholder Progress Bar */}
                                        <div class="bg-red-300 h-full w-2/5 rounded-full"></div>
                                    </div>
                                </div>
                                <MilestoneContainer student={name}/>
                            </div>
                        ))}
                </div>
            </div>
        )
    }

}