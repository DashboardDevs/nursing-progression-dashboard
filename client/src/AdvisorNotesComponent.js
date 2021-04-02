import React, { Component } from 'react';
import './index.css';
import Moment from 'moment';

export default class AdvisorNotesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        const url = `http://localhost:3001/notes/${this.props.student.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ notes: data });
            });
    }

    
    render(){
        return(
        <div class="flex flex-col-3 items-center bg-gray-200 rounded-xl p-2 my-2 justify-center">
            <table>
                {this.state.notes.map(note => (
                                    <tr>
                                    <td>{note.note}</td>
                                    <td>{Moment(note.date).format('MM-DD-YYYY')}</td>
                                    </tr>
                                ))}
            </table>
        </div>
        );
    }
}