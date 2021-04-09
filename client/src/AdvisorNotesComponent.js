import React, { Component } from 'react';
import './index.css';
import Moment from 'moment';

export default class AdvisorNotesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isLoading: false
        }
        this.addNote=this.addNote.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3001/notes/${this.props.student.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ notes: data });
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
        
        const url = `http://localhost:3001/addnote`;
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ s_id: this.props.student.id, a_id: this.props.student.advisor_id, note:noteText, date: date })
            };
            fetch(url, requestOptions)
                .catch(err => console.log(err))
                .then(() => {
                    let newNote = [null, this.props.student.id, this.props.student.advisor_id, noteText, date];
                    console.log(newNote);
                    this.setState(prevState => (
                        {
                            notes: [...prevState.notes, newNote],
                        }
                    ));
                });
    }

    render(){
        while (this.state.isLoading) {
            return null;
        }
        return(
            <div>
                <div>
                    <div className="text-black m-5 text-xl">
                        Create New Note:
                    </div>
                    <div>
                        <div>
                            <textarea id="noteSection" onChange={this.updateInfo} class="w-full bg-gray-200" rows="5"></textarea>
                        </div>
                        <input id="submitbutton" type="submit" value="Submit" class="ml-5" onClick={this.addNote}/>
                    </div>
                </div>
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
            </div>
        );
    }
}