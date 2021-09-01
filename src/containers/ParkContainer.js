import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchParks } from '../actions/ParksActions'
// import { addToSavedParks } from '../actions/SavedParksActions'
import ParksList from '../components/ParksList'

class ParkContainer extends Component {

    componentDidMount(){
        this.props.fetchParks()
    }
    
    render() {
        return (
            <div>
                <h1>Explore Across the USA, One Park at a Time</h1>
                <ParksList />


            </div>
        );
    }

}

export default connect(null, {fetchParks})(ParkContainer);