import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchParks} from '../actions/ParksActions'
import ParksList from './ParksList'
import ParksForm from './ParksForm'

class ParkContainer extends Component {

    componentDidMount(){
        this.props.fetchParks()
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to NationalParksUSA</h1>
                <ParksForm />
                <ParksList />


            </div>
        );
    }

}

export default connect(null, {fetchParks})(ParkContainer);