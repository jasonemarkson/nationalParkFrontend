import { combineReducers } from 'redux'

import { parksReducer } from './ParksReducer'
import { savedParksReducer } from './SavedParksReducer'

export const rootReducer = combineReducers({
    parks: parksReducer,
    savedparks: savedParksReducer
})