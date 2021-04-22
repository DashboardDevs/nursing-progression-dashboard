//import { comment } from 'postcss';
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './Form.css';

class UpdateRequestForm extends Component {

    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {value: -1, milestones :[], status: -1, submitted: false};
        this.handleMilestoneChange = this.handleMilestoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        const url = `http://localhost:3001/student/milestones/${this.props.location.student.id}`;
        this._isMounted = true;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ milestones: data });
            })
      }
      
      handleMilestoneChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value === -1) {
            alert("You must select a milestone to update!");
            event.preventDefault();
        }
        else {
            const url = `http://localhost:3001/milestones/update`;
            
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ m_id: this.state.value, s_id: this.props.location.student.id, status: 1 })
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
            body: JSON.stringify({ m_id: m_id, s_id: this.props.location.student.id, status: 1 })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                this.setState({ submitted: true });
            });
    }
    componentWillUnmount() {
      this._isMounted = false;
    }
    render() {
      if (this.props.currentUser === null) {
        return <Redirect to="/" />
      }else if (this.state.submitted) {
        return <Redirect to={"/student/" + this.props.location.student.id} />
    }

        return (
          <div>
            <div id="backdrop"className="m-5 p-5 text-center text-lg bg-gray-400 bg-opacity-30">
                <form onSubmit={this.handleSubmit}>
                <div className="m-1 p-1">
                <label htmlFor="milestone">Milestone to Update: </label>
                <select id="milestone" value={this.state.value} onChange={this.handleMilestoneChange}>
                                <option disabled="disabled" value="-1">Select Milestone</option>
                                {this.state.milestones.map(milestone => (
                                    <option id={milestone.id} value={milestone.id} key={milestone.id}>{milestone.name}</option>
                                ))}
                            </select>
                </div>
                <br></br>
                <div className="m-1 p-1">
                <label htmlFor="text">Additional Update Information: </label>
                    <textarea id="text"></textarea>
                </div>
                <br></br>
                     <input id= "submitbutton" type="submit" value="Submit" />
                </form>
          </div>
          </div>
        );
      }
}

export default withRouter(UpdateRequestForm);
