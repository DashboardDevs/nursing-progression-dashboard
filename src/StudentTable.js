import React, { Component } from 'react';

export default class StudentTable extends Component {

    render(){
        return(
            <div>
                <div class="flex flex-col justify-center items-center rounded-lg bg-gray-200 border mb-4 p-4">               
                        {this.props.students.map(student =>
                            <div class="flex flex-col border mb-2 w-full p-2 h-48 bg-white rounded-lg">
                                <div class="flex items-center">
                                    <div class="bg-gray-200 w-36 text-center font-semibold py-1 rounded-lg">{student.first_name}.{student.dot_number}</div>
                                    <div class=" bg-gray-200 mx-2 h-4 w-full rounded-full">
                                        {/* Placeholder Progress Bar */}
                                        <div class="bg-red-300 h-full w-2/5 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }

}