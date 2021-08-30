export const fetchParks = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/parks')
        .then(resp => resp.json())
        .then(parks=> dispatch({type: 'FETCH_PARKS', payload: parks})
        )
    }

} 