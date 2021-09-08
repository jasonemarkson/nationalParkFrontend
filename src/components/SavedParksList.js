import React, { Component } from 'react';
import { connect } from 'react-redux'
import SavedPark from './SavedPark'

class SavedParksList extends Component {

    state = {
        savedParks: []
    }

    renderSavedParks = () => {
        return this.props.savedParks.map(s => s.park)
    }

    render() {
        return (
            <div>
                <p>SavedParksList is here</p>
                {this.renderSavedParks().map((s) => <SavedPark {...s} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        savedParks: state.savedReducer
        // gives us an array of saved_parks but still need to do c.park to access the Park
    }
}


export default connect(mapStateToProps)(SavedParksList);