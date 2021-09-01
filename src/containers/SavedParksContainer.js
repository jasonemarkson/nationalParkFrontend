import React, { Component } from 'react';
// import { connect } from 'react-redux' -- we'll need this to access our savedParks

import SavedParksList from '../components/SavedParksList';
// saved parks by users
class SavedParksContainer extends Component {


    render() {
        return (
            <div id="saved-park">
                <h1>These are your SavedParks</h1>
                <SavedParksList />
            </div>
        );
    }
}


// wasn't able to receive props/state from the store -- needed to connect to store
export default SavedParksContainer;