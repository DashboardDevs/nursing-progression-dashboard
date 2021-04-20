import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdvisorCommitteeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            committees: []
        }
    }

    componentDidMount() {
        const url = `http://localhost:3001/advisor/committee/${this.props.advisorId}`;
        fetch(url)
            .then(res => res.json())
            .then(committees => {
                this.setState({ committees: committees })
            });
    }

    render() {
        return (
            <div>
                <div className="font-semibold items-center">Committees</div>
                <div className="ml-5">
                    {this.state.committees.map(student => (
                        <div>
                            <Link to={{ pathname: `/student/${student.id}` }}>
                                {student.first_name} {student.last_name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}