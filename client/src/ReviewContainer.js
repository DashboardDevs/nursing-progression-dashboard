import React, { Component } from 'react';

export default class ReviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
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

    render() {
        if(this.state.isLoading) {
            return null;
        }

        return(
            <section className="flex flex-col items-center overflow-y-auto">
                {this.state.reviews.map((r) => {
                    return(
                        <div className="w-11/12 mb-2 bg-white rounded-lg p-1 text-center border border-yellow">
                            <h3 classNmae="text-scarlet">{r.first_name} {r.last_name}</h3>
                            <h4 className="text-gray-400">{r.name}</h4>
                            <h4 className="text-gray-400">Submitted: TODO</h4>
                        </div>
                    )
                })}
            </section>
        )
    }
}