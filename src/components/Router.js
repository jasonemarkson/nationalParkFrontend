import React from 'react';
import { Switch, Route } from 'react-router-dom'

import ParksContainer from '../containers/ParkContainer'
import SavedParksContainer from '../containers/SavedParksContainer'
import Home from './Home'

const Router = (state) => {
    state = {
        saved: []
    }

    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/parks' component={ParksContainer} />
            <Route path='/saved_parks' component={SavedParksContainer} />
        </Switch>
    )
}

export default Router; 