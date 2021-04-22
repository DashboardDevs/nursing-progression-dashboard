import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './Form.css';

class UpdateMilestoneForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            milestoneValue: -1,
            statusValue: -1,
            milestones: [],
            submitted: false
        };

        this.handleMilestoneChange = this.handleMilestoneChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3001/milestones`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ milestones: data });
            });
    }

    handleMilestoneChange(event) {
        this.setState({ milestoneValue: event.target.value });
    }

    handleStatusChange(event) {
        this.setState({ statusValue: event.target.value })
    }

    handleSubmit(event) {
        if (this.state.milestoneValue === -1 || this.state.statusValue === -1) {
            alert("You must select a milestone to update!");
            event.preventDefault();
        }
        else {
            const url = `http://localhost:3001/milestones/update`;
            const status = parseInt(this.state.statusValue);
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ m_id: this.state.milestoneValue, s_id: this.props.location.student.id, status: status })
            };
            fetch(url, requestOptions)
                .catch(err => console.log(err))
                .then(() => {
                    this.setState({ submitted: true });
                });
            event.preventDefault();
        }
    }

    updateMilestone(m_id, status) {
        const url = `http://localhost:3001/milestones/update`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ m_id: m_id, s_id: this.props.location.student.id, status: status })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                this.setState({ submitted: true });
            });
    }

    render() {
        if (this.props.currentUser === null) {
            return <Redirect to="/" />
        } else if (this.state.submitted) {
            return <Redirect to={"/student/" + this.props.location.student.id} />
        }

        return (
            <div>
                <div className="text-black m-5 text-4xl">
                    {this.props.location.student.first_name} {this.props.location.student.last_name}
                </div>
                <div id="backdrop" className="m-5 p-5 text-center text-lg bg-gray-400 bg-opacity-30">
                    <div className="text-black m-5 text-4xl">
                        Update Milestone Status
                </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="m-1 p-1">
                            <label htmlFor="milestone">Milestone to Update: </label>
                            <select id="milestone" value={this.state.milestoneValue} onChange={this.handleMilestoneChange}>
                                <option disabled="disabled" value="-1">Select Milestone</option>
                                {this.state.milestones.map(milestone => (
                                    <option id={milestone.id} value={milestone.id} key={milestone.id}>{milestone.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="m-1 p-1">
                            <label htmlFor="milestone">Milestone Status: </label>
                            <select id="milestone" value={this.state.statusValue} onChange={this.handleStatusChange}>
                                <option disabled="disabled" value="-1">Select status</option>
                                <option value="3">Complete</option>
                                <option value="0">To Do</option>
                                <option value="1">In Progress</option>
                                <option value="2">Missing Prerequisite</option>
                            </select>
                        </div>
                        <br></br>
                        <input id="submitbutton" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateMilestoneForm);
