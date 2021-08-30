import { combineReducers } from 'redux'

import { parksReducer } from './ParksReducer'

export const rootReducer = combineReducers({
    parks: parksReducer
})