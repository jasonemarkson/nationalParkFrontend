import React from 'react';
import { connect } from 'react-redux'
import { addToSavedParks } from '../actions/SavedParksActions'

function Park(props) {
    const handleClick = () => {
        console.log("handleclick has been triggered")
        ({type: "ADD_TO_SAVED", payload: addToSavedParks})
    }

    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={600} /><br></br>
            <button onClick={this.handleClick}
            >Add to SavedParks</button>
        </div>
    )

}

export default connect()(Park);