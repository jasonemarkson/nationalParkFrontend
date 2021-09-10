import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSavedParks } from '../actions/SavedParksActions'


class Attraction extends Component {
    
    handleClick = (event) => {
        fetch(`http://localhost:3000/attractions/${this.props.id}`, {
            method: 'DELETE'
        })
        // .then(response => response.json())
        .then(data => 
            this.props.fetchSavedParks()
        )
        console.log("deleted")
    }

    render() {
        return (
            <div>
                <em>{this.props.name}</em>
                <button onClick={this.handleClick}
                >Delete</button>
            </div>
        );
    }
}

export default connect(null, {fetchSavedParks})(Attraction);