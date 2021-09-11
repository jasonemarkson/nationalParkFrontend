export const savedParksReducer = (state = { savedParks: [] }, action) => {
    console.log('state==>>>', state, 'payll==>>', action);
    switch(action.type){
        case 'ADD_TO_SAVED':
            return { ...state, savedParks: [...state.savedParks, action.payload] }
        case 'FETCH_SAVED_PARKS':
            return { ...state, savedParks: action.payload }
        default:
            return state
    }
    
}