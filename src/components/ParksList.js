import React, { Component } from 'react'
import { connect } from 'react-redux'
import Park from './Park'
import { MoonLoader } from 'react-spinners'


class ParksList extends Component {  

    // 1) we changed this component to a class component & then we added state to be able to retrieve all of the park objects in an array
    state = {
        parks: [],
        states: '',
        saved: []
    }

    handleChange = (event) => {
        const { name, value } = event.target
        
        this.setState({
            [name]: value
        })
    }

    // 3) created a function here to handle the logic of iterating over all of the parks in this.props.parks and filtering them by the search term ('state code')
    renderParks = () => {
        return this.props.parks.filter(park => park.states.toLowerCase().includes(this.state.states.toLowerCase()))
    }

    render() {
        return (
            <div>
                <label>Find Parks by State Code: </label> 
                {/* 2) added an input field in the div as well as the onChange callback, value, and name attributes */}
                    <input type="text" onChange={this.handleChange} value={this.state.states} name="states">

                    </input>

                {
                (this.renderParks().length > 1 || this.renderParks().length !== 1)
                ? <p>Showing {this.renderParks().length} parks</p>
                : <p>Showing {this.renderParks().length} park</p>
                }
                
                {/* 4) finally we call the method in the render() which returns an array and then we map over that array and create a Park component for each element which will display to our DOM */}
                
                {(this.props.parks.length > 0) ? this.renderParks().map((park, key) => <Park key={park.id} {...park} />) : <MoonLoader />}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { 
        parks: state.parks, 
        saved: []
    }
}


export default connect(mapStateToProps)(ParksList);
