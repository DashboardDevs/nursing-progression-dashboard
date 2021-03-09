import { comment } from 'postcss';
import React, { Component } from 'react';
import './Form.css';

export default class UpdateRequestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'Select Milestone'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        if (this.state.value == "Select Milestone"){
            alert("You must select a milestone to update!")
        }
        else{
            alert('A request for ' + this.state.value + ' update has been submitted.');
            event.preventDefault();
        }
      }

    render() {
        return (
            <div id="backdrop"class="m-5 p-5 text-center text-lg bg-gray-400 bg-opacity-30">
                <form onSubmit={this.handleSubmit}>
                <div class="m-1 p-1">
                <label for="milestone">Milestone to Update: </label>
                    <select id="milestone" value={this.state.value} onChange={this.handleChange}>
                        <option disabled="disabled" selected="selected">Select Milestone</option>
                        <option value="Initial meeting with advisor">Initial meeting with advisor</option>
                        <option value="One page executive summary">One page executive summary</option>
                        <option value="Committee discussion with advisor and selection">Committee discussion with advisor and selection</option>
                        <option value="Pre-Professional Exam meeting with full committee">Pre-Professional Exam meeting with full committee</option>
                    </select>
                </div>
                <br></br>
                <div class="m-1 p-1">
                <label for="text">Additional Update Information: </label>
                    <textarea id="text"></textarea>
                </div>
                <br></br>
                     <input id= "submitbutton" type="submit" value="Submit" />
                </form>
          </div>
        );
      }
}
