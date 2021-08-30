export const parksReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PARKS':
            return action.payload
        default:
            return state
    }
    
}