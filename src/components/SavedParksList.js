import React from 'react';
import { connect } from 'react-redux'
import SavedPark from './SavedPark';
import { useSelector } from 'react-redux'


function SavedParksList(props) {

    const savedparks = useSelector(state => state.savedReducer.savedParks)

        return (
            <div>
                This is where a saved park would go -- create a SavedPark component
                {savedparks.map((s) => <SavedPark key={s.id} {...s} /> )}
            </div>
        );
}

const mapStateToProps = state => {
    return {
        savedparks: state.savedReducer.savedParks
    }
}

export default connect(mapStateToProps)(SavedParksList);