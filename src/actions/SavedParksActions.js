export const addToSavedParks = (park) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/saved_parks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(park)
        })
        .then(response => response.json())
        .then(park => 
            dispatch({ type: 'ADD_TO_SAVED' , payload: park})
        )
    }
}