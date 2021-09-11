import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSavedParks } from '../actions/SavedParksActions'
import SavedPark from './SavedPark'

class SavedParksList extends Component {

    render() {
        console.log('propss', this.props);
        const {savedParks} = this.props
        
        return (
            <div>
                <p>SavedParksList is here</p>
                {savedParks.map((s, index) => <SavedPark key={index} savedParkId={s.id} {...s.park} attractions={s.attractions}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        savedParks: state.savedReducer.savedParks
    }
}


export default connect(mapStateToProps, {fetchSavedParks} )(SavedParksList);