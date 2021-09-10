import React, { Component } from 'react';
import { connect } from 'react-redux'
import SavedPark from './SavedPark'

class SavedParksList extends Component {

    render() {
        const {savedParks} = this.props

        // want to create a variable to save all the attraction objects in an array
        // attr={attractions.map(a => <Attraction />
        
        return (
            <div>
                <p>SavedParksList is here</p>
                {savedParks.map((s, index) => <SavedPark key={index} savedParkId={s.id} {...s.park} attractions={s.attractions}/>)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        savedParks: state.savedReducer.savedParks
    }
}


export default connect(mapStateToProps)(SavedParksList);