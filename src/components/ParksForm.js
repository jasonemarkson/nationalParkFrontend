import React, { Component } from 'react';

class ParksForm extends Component {

    state = {
        states: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        // Want this form to be able to find parks by state code; unable to grab all of the parks from state to filter by the search value; maybe I need to move this into my ParksList where I have access to the parks
        
        // let searchStateCode = event.target.elements["states"].value
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Find Parks by State Code: </label> 
                    <input type="text" onChange={this.handleChange} value={this.state.states} name="states">

                    </input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default ParksForm;