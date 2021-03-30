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
        this.loadReviews();
    }

    loadReviews() {
        const url = `http://localhost:3001/milestones/reviews/${this.props.currentUser.id}`;
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const sorted = data.sort((a,b) => Date.parse(a.submitted) < Date.parse(b.submitted));
                this.setState({reviews: sorted, isLoading: false});
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
            .catch(err => console.log(err))
            .then(() => {
                this.setState({isLoading: true});
                this.loadReviews()
                    .then(() => {
                        this.props.refresh();
                    });
            });
    }

    render() {
        if(this.state.isLoading) {
            return null;
        }

        return(
            <section className="flex flex-col items-center overflow-y-auto">
                {this.state.reviews.map((r) => {
                    const d = new Date(Date.parse(r.submitted));
                    const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
                    return(
                        <div className="flex flex-col items-center w-11/12 text-center mb-2 bg-white rounded-lg border border-yellow">
                            <h3 className="text-scarlet">{r.first_name} {r.last_name}</h3>
                            <h4 className="text-gray-400">{r.name}</h4>
                            <h4 className="text-gray-400">Submitted: {date}</h4>
                            <div className="w-full border border-b-1 mb-1"></div>
                            <button className="w-11/12 bg-red-700 text-white mb-2 py-1 rounded-md" onClick={() => this.updateMilestone(r, 0)}>Decline</button>
                            <button className="w-11/12 bg-green-600 text-white mb-2 py-1 rounded-md" onClick={() => this.updateMilestone(r, 3)}>Approve</button>
                        </div>
                    )
                })}
            </section>
        )
    }
}