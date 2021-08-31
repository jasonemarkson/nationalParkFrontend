import { combineReducers } from 'redux'

import { parksReducer } from './ParksReducer'
import { wishlistsReducer } from './WishListsReducer'

export const rootReducer = combineReducers({
    parks: parksReducer,
    wishlist: wishlistsReducer
})