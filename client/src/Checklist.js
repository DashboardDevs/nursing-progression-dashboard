import React, { Component } from 'react';

export default class Checklist extends Component {

    render() {

        const milestones = [
            "Initial meeting with advisor",
            "One page executive summary",
            "PICO-T question",
            "Committee discussion with advisor and selection",
            "Pre-Professional Exam meeting with full committee",
            "Final Professional Exam document sent to committee",
            "Application for Professional Exam due in Gradforms",
            "Discuss Manuscript vs. multiple document format with committee",
            "Complete HSRD form with advisor",
            "Apply to graduate in Gradforms",
            "Schedule DNP Final Defense",
            "Committee informal meeting",
            "Complete DNP Final Project Defense",
            "Knowledge Bank submission"
        ]

        return (
            <div className = "grid grid-cols-3">
                {milestones.map(milestone =>
                    <div>
                        <input type="checkbox" disabled="true"/>
                        <span> {milestone}</span>
                    </div>
                )}
            </div >
        )
    }
}