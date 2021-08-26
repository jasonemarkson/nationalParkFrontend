import React, { Component } from 'react';

const API_KEY = '&api_key=a0pycXYjNhLyJ0vQ3vQI9UfbjXN0Ii7Gf8aUzM74'
const URL = `https://developer.nps.gov/api/v1/parks?stateCode=`

class ParkContainer extends Component {

    fetchNationalParks = (stateCode) => {
        fetch(`${URL}+${stateCode}+${API_KEY}`)
        .then(response => response.json())
        .then(parks => {debugger})
    }
    
    render() {
        return (
            <div>
                <h1>This is the parkscontainer</h1>
                {/* renders all of the park cards on the page */}

            </div>
        );
    }

    fetchNationalParks
}

export default ParkContainer;