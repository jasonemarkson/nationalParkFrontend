import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSavedParks } from '../actions/SavedParksActions'
import SavedParksList from '../components/SavedParksList';
// saved parks by users
class SavedParksContainer extends Component {

    componentDidMount() {
        this.props.fetchSavedParks()
    }


    render() {
        return (
            <div id="saved-parks-container">
                <h1>These are your SavedParks</h1>
                <SavedParksList />
            </div>
        );
    }
}


// wasn't able to receive props/state from the store -- needed to connect to store
export default connect(null, {fetchSavedParks})(SavedParksContainer);