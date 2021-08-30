import { createStore } from 'redux'
import parksReducer from './reducers/ParksReducer'

const store = createStore({
    parksReducer
})

export default store;