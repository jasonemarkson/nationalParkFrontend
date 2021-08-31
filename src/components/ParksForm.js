import React, { Component } from 'react';

class ParksForm extends Component {

    state = {
        states: ''
    }

    handleChange = (event) => {
        this.setState({
            states: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        // Want this form to be able to find parks by state code
        
    }

    render() {
        console.log(this.state.states)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Find Parks by State Code: <input type="text" onChange={this.handleChange} value={this.state.states}>

                    </input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default ParksForm;