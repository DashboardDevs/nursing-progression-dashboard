import React, { Component } from 'react';

export default class StudentCommitteeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            committee: [],
            advisors: [],
            dropDownValue: -1

        }

        this.addNewMember = this.addNewMember.bind(this);
    }

    componentDidMount() {
        const committeeUrl = `http://localhost:3001/student/committee/${this.props.studentId}`;
        const advisorUrl = `http://localhost:3001/advisor`;
        fetch(committeeUrl)
            .then(res => res.json())
            .then(committee => {
                this.setState({ committee: committee })
            });
        fetch(advisorUrl)
            .then(res => res.json())
            .then(advisors => {
                this.setState({ advisors: advisors });
            })
    }

    addNewMember() {
        if (this.state.dropDownValue != -1) {
            const url = `http://localhost:3001/committee`;
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentId: this.props.studentId, memberId: this.state.dropDownValue })
            };
            fetch(url, requestOptions)
                .catch(err => console.log(err))
                .then(() => {
                    let newAdvisor = this.state.advisors.find(a => a.id == this.state.dropDownValue)
                    this.setState(prevState => (
                        {
                            committee: [...prevState.committee, newAdvisor],
                            dropDownValue: -1
                        }
                    ));
                });
        }
    }

    removeMember(memberId) {
        const url = `http://localhost:3001/committee`;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: this.props.studentId, memberId: memberId })
        };
        fetch(url, requestOptions)
            .catch(err => console.log(err))
            .then(() => {
                let newCommittee = this.state.committee.filter(a => a.id !== memberId);
                this.setState({ committee: newCommittee });
            });
    }

    render() {
        return (
            <div className="w-4/12 ml-5">
                <div className="bg-gray-200 text-left font-semibold py-1 rounded-lg mt-3">
                    <div className="text-xl">
                        Committee Members:
                    </div>
                    <div className="ml-3 mt-2">
                        {this.state.committee.map(member => (
                            <div >
                                <span >{member.first_name} {member.last_name}</span>
                                <button className="float-right mr-2" onClick={() => this.removeMember(member.id)}>X</button>
                            </div>
                        ))}
                    </div>
                        <div className="ml-3 mt-3 mb-3">
                            <select value={this.state.dropDownValue} onChange={e => this.setState({ dropDownValue: e.target.value })}>
                                <option disabled="disabled" value="-1">New Committee Member</option>
                                {this.state.advisors.map(advisor => {
                                    let currentMemberIds = this.state.committee.map(a => a.id);
                                    if (!currentMemberIds.includes(advisor.id)) {
                                        return <option value={advisor.id}>{advisor.first_name} {advisor.last_name}</option>
                                    }
                                })}
                            </select>
                            <button className="bg-white textgray-400 px-3 rounded-3xl float-right mr-1" onClick={this.addNewMember}>Add Member</button>
                        </div>
                </div>
            </div>
        )
    }
}