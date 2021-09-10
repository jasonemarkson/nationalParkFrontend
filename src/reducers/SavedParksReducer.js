export const savedParksReducer = (state = { savedParks: [] }, action) => {
    switch(action.type){
        case 'ADD_TO_SAVED':
            return { ...state, savedParks: [...state.savedParks, action.payload] }
        case 'FETCH_SAVED_PARKS':
            return { ...state, savedParks: action.payload }
        case 'ADD_ATTRACTIONS_TO_SAVED_PARKS':
            return { ...state, savedParks: [...state.savedParks, action.payload] }
        default:
            return state
    }
    
}