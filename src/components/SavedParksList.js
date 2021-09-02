import React, { Component } from 'react';
import { connect } from 'react-redux'
import SavedPark from './SavedPark';

class SavedParksList extends Component {

    render() {
        return (
            <div>
                This is where a saved park would go -- create a SavedPark component
                <SavedPark />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        savedparks: state.savedReducer.savedParks
        // need to add a fetch for when the users log in to fetch the data
    }
}

export default connect(mapStateToProps)(SavedParksList);