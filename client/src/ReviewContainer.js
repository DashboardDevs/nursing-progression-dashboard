import React, { Component } from 'react';

export default class ReviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }

        this.updateMilestone = this.updateMilestone.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3001/milestones/reviews/${this.props.currentUser.id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({reviews: data, isLoading: false});
            })
    }

    updateMilestone(milestone, status) {
        const url = `http://localhost:3001/milestones/update`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ m_id: milestone.id, s_id: milestone.s_id, status: status })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        console.log(milestone, status);
    }

    render() {
        if(this.state.isLoading) {
            return null;
        }

        return(
            <section className="flex flex-col items-center overflow-y-auto">
                {this.state.reviews.map((r) => {
                    r.isHidden = 'hidden';
                    return(
                        <div className="flex flex-col items-center w-11/12 mb-2 bg-white rounded-lg p-1 border border-yellow">
                            <div className="flex flex-col items-center text-center w-11/12">
                                <h3 className="text-scarlet">{r.first_name} {r.last_name}</h3>
                                <h4 className="text-gray-400">{r.name}</h4>
                                <h4 className="text-gray-400">Submitted: TODO</h4>
                                <button className="w-full bg-red-700 text-white mb-2 py-1 rounded-md" onClick={() => this.updateMilestone(r, 0)}>Decline</button>
                                <button className="w-full bg-green-600 text-white mb-2 py-1 rounded-md" onClick={() => this.updateMilestone(r, 3)}>Approve</button>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
}