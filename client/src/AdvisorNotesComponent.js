import React, { Component } from 'react';
import './index.css';
import Moment from 'moment';

export default class AdvisorNotesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.addNote = this.addNote.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3001/notes/${this.props.student.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ notes: data })
            });
    }

    addNote() {
        var noteText = document.getElementById('noteSection').value;

        //get time to fit sql datetime
        var pad = function (num) { return ('00' + num).slice(-2) };
        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            pad(date.getUTCMonth() + 1) + '-' +
            pad(date.getUTCDate()) + ' ' +
            pad(date.getUTCHours()) + ':' +
            pad(date.getUTCMinutes()) + ':' +
            pad(date.getUTCSeconds());


        const url = `http://localhost:3001/notes`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ s_id: this.props.student.id, a_id: this.props.student.advisor_id, note: noteText, date: date })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                let newNote = [noteText, date];
                this.setState(prevState => (
                    {
                        notes: [...prevState.notes, newNote]
                    }
                ), () => {
                    const urlNotes = `http://localhost:3001/notes/${this.props.student.id}`;
                    fetch(urlNotes)
                        .then(res => res.json())
                        .then(notes => {
                            this.setState({ notes: notes });
                        });
                });
            });
    }

    deleteNote(notemsg) {
        const url = `http://localhost:3001/notes`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: this.props.student.id, note: notemsg })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                let allNotes = this.state.notes.filter(note => note.s_id !== this.props.student.id && note.note !== notemsg);
                this.setState({ notes: allNotes });
            });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="text-black mt-5 ml-6 mb-1 text-xl">
                        Create New Note:
                    </div>
                    <div>
                        <div className="flex items-center bg-gray-200 rounded-xl ml-5 mr-5">
                            <textarea id="noteSection" className="w-11/12 bg-gray-200 rounded-xl pl-2" rows="5"></textarea>
                            <button className="ml-5 bg-white px-3 rounded-xl" onClick={this.addNote}>Save</button>
                        </div>
                    </div>
                </div>
                <div className="text-black mt-5 ml-6 mb-1 text-xl">
                    Notes:
                </div>
                <div className="flex flex-col-3 items-center bg-gray-200 rounded-xl p-2 ml-5 mr-5 justify-center">
                    <table className="w-full">
                        <tbody>
                        {this.state.notes.map((note,i) => (
                            <tr key={i}>
                                <td className="w-3/4">{note.note}</td>
                                <td className="w-1/6">{Moment(note.date).format('MM-DD-YYYY')}</td>
                                <td>
                                    <button className="bg-white px-3 rounded-3xl" onClick={() => this.deleteNote(note.note)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}