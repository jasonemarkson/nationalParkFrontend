import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchSavedParks } from '../actions/SavedParksActions'
import Attraction from './Attraction'

function SavedPark(props) {
    const [attraction, setAttraction] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const { value } = event.target

        setAttraction(value)
    }

    const handleSubmit = (event) => {
        // submit event keeps refreshing before I can see the update
        event.preventDefault()
        setAttraction('')

        fetch(`http://localhost:3000/saved_parks/${props.savedParkId}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({attractions: attraction})
        })
        .then(response => response.json())
        .then(data => 
            dispatch(fetchSavedParks())
        )

    }

    const handleClick = (event) => {
        fetch(`http://localhost:3000/saved_parks/${props.savedParkId}`, {
            method: 'DELETE'
        })
        .then(data => 
            dispatch(fetchSavedParks())
        )
        console.log("deleted")
    }

    return (
        <div id="saved-park">
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={400} /><br></br>
            <p>Attractions List: {props.attractions.map((e, index) => <Attraction key={index} {...e}/>)}</p>
            <form onSubmit={handleSubmit}>
                <label>Attractions: </label><br></br>
                <textarea onChange={handleChange} value={attraction} placeholder="Add an attraction..."
                ></textarea><br></br>
                <input type="submit"></input>
            </form>
            <button onClick={handleClick}
            >Remove from SavedParks</button>
            
        </div>
    );
}

export default SavedPark;