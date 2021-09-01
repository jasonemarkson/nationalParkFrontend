import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ParksContainer from '../containers/ParkContainer'
import WishListContainer from '../containers/WishListContainer'
import Home from './Home'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/parks' component={ParksContainer} />
            <Route path='/wishlist' component={WishListContainer} />
        </Switch>
    )
}

export default Router; 