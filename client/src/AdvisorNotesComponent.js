import React, { Component } from 'react';
import './index.css';
import Moment from 'moment';
import {Redirect} from "react-router-dom";

export default class AdvisorNotesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.addNote=this.addNote.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3001/notes/${this.props.student.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ notes: data })
            });
    }

    addNote(){
        var noteText = document.getElementById('noteSection').value;
        
        //get time to fit sql datetime
        var pad = function(num) { return ('00'+num).slice(-2) };
        var date;
        date = new Date();
        date = date.getUTCFullYear()         + '-' +
                pad(date.getUTCMonth() + 1)  + '-' +
                pad(date.getUTCDate())       + ' ' +
                pad(date.getUTCHours())      + ':' +
                pad(date.getUTCMinutes())    + ':' +
                pad(date.getUTCSeconds());

        console.log(this.props.student.id);
        console.log(this.props.student.advisor_id);
        console.log(date);
        
        const url = `http://localhost:3001/notes`;
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ s_id: this.props.student.id, a_id: this.props.student.advisor_id, note:noteText, date: date })
            };
            fetch(url, requestOptions)
                .catch(err => console.log(err))
                .then(() => {
                    let newNote = [noteText, date];
                    console.log(newNote);
                    this.setState(prevState => (
                        {
                            notes: [...prevState.notes, newNote]
                        }
                    ), () => {
                        console.log(this.state.notes);
                        const urlNotes = `http://localhost:3001/notes/${this.props.student.id}`;
                        fetch(urlNotes)
                            .then(res => res.json())
                            .then(notes => {
                                this.setState({ notes: notes});
                            });
                    });
                });
    }

    deleteNote(notemsg) {
        const url = `http://localhost:3001/notes`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({studentId:this.props.student.id, note:notemsg })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                let allNotes = this.state.notes.filter(note => note.s_id !== this.props.student.id && note.note !== notemsg);
                this.setState({ notes: allNotes });
            });
    }

    render(){
        return(
            <div>
                <div>
                    <div className="text-black m-5 text-xl">
                        Create New Note:
                    </div>
                    <div>
                        <div class="bg-gray-200 rounded-xl ml-5 mr-5">
                            <textarea id="noteSection" class="w-full bg-gray-200 rounded-xl pl-2" rows="5"></textarea>
                        </div>
                        <input id="submitbutton" type="submit" value="Submit" class="ml-5" onClick={this.addNote}/>
                    </div>
                </div>
                <div className="text-black m-5 text-xl">
                    Notes:
                </div>
                <div class="flex flex-col-3 items-center bg-gray-200 rounded-xl p-2 my-2 ml-5 mr-5 justify-center">
                    <table class="w-full">
                        {this.state.notes.map(note => (
                                            <tr>
                                            <td class="w-3/4">{note.note}</td>
                                            <td class="w-1/6">{Moment(note.date).format('MM-DD-YYYY')}</td>
                                            <td>
                                                <button class="bg-gray-300 p-2 rounded-xl" onClick={() => this.deleteNote(note.note)}>delete</button>
                                            </td>
                                            </tr>
                                        ))}
                    </table>
                </div>
            </div>
        );
    }
}