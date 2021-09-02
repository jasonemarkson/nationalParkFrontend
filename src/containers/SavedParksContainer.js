import React, { Component } from 'react';
import { connect } from 'react-redux'

import SavedParksList from '../components/SavedParksList';
// saved parks by users
class SavedParksContainer extends Component {

    state = {
        savedParks: []
    }


    render() {
        return (
            <div id="saved-park">
                <h1>These are your SavedParks</h1>
                <SavedParksList />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        savedParks: [state.savedparks]
    }
}


// wasn't able to receive props/state from the store -- needed to connect to store
export default connect(mapStateToProps)(SavedParksContainer);