import React, { Component } from 'react';
import { connect } from 'react-redux'
import SavedPark from './SavedPark'

class SavedParksList extends Component {

    render() {
        const {savedParks} = this.props
        return (
            <div>
                <p>SavedParksList is here</p>
                {savedParks.map((s) => <SavedPark savedParkId={s.id} attr={s.attractions} {...s.park} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        savedParks: state.savedReducer.savedParks
        // gives us an array of saved_parks but still need to do c.park to access the Park
    }
}


export default connect(mapStateToProps)(SavedParksList);