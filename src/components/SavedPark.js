import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addAttractionsToSavedParks } from '../actions/SavedParksActions'

function SavedPark(props) {
    const [attraction, setAttraction] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { value } = event.target

        setAttraction(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`http://localhost:3000/saved_parks/${props.savedParkId}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({attractions: attraction})
        })
        .then(response => response.json())
        .then(data => 
            dispatch(addAttractionsToSavedParks(data.attractions))
        )
    }
    // {debugger}
    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={400} /><br></br>
            <form onSubmit={handleSubmit}>
                <label>Attractions: </label><br></br>
                <textarea onChange={handleChange} value={attraction} placeholder="Add an attraction..."
                ></textarea><br></br>
                {/* <label>Notes: </label><br></br>
                <textarea ></textarea><br></br> */}
                <input type="submit"></input>
            </form>
            <p>Attractions List: <em>{props.attr}</em></p>
            
        </div>
    );
}

export default SavedPark;