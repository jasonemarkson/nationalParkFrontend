export const savedParksReducer = (state = { savedParks: [] }, action) => {
    switch(action.type){
        case 'ADD_TO_SAVED':
            return { ...state, savedParks: [...state.savedParks, action.payload] }
        default:
            return state
    }
    
}