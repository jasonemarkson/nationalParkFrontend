// export const addToSavedParks = (props) => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/saved_parks', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(props)
//         })
//         .then(response => response.json())
//         .then(park => 
//             dispatch({ type: 'ADD_TO_SAVED' , payload: park})
//         )
//     }
// }

export const addToSavedParks = (park) => ({ 
    type: "ADD_TO_SAVED",
     payload: park
 })

// export const deleteFromCart = (artwork) => ({
//     type: "DELETE_CART",
//     payload: artwork
// })