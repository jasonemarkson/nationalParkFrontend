import React from 'react';
import { useDispatch } from 'react-redux'
import { addToSavedParks } from '../actions/SavedParksActions';

function Park(props){
    const dispatch = useDispatch()
    
    const handleClick = (parkId) => {
        console.log("Added to Saved Parks!")
        dispatch(addToSavedParks(parkId))
    }

    return (
        <div id="park">
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={400} /><br></br>
            <button onClick={() => handleClick(props.id)}
            >Add to SavedParks</button>
        </div>
    )

}

export default Park;