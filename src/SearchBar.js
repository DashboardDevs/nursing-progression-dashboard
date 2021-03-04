import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextChange(e.target.value);
    }

    render(){
        const searchText = this.props.filterText;
        return(
            <div>
                <input class="bg-transparent text-center w-full" type="text" value={searchText} onChange = {this.handleChange} placeholder='Search a Student'/>
                {/* Placeholder Search Function */}
            </div>
        )
    }

}