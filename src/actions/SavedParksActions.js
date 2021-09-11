export const addToSavedParks = (parkId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/saved_parks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                park_id: parkId, 
                user_id: 1
            })
        })
        .then(response => response.json())
        .then(data => 
            dispatch({ type: 'ADD_TO_SAVED' , payload: data})
        )
    }
}

export const fetchSavedParks = () => {
    return (dispatch) => (
        fetch('http://localhost:3000/saved_parks')
        .then(response => response.json())
        .then(savedparks => 
            dispatch({type: 'FETCH_SAVED_PARKS', payload: savedparks})
        )
    )

}