import React, { Component } from 'react';
import Park from './Park'
import { connect } from 'react-redux'

class ParkContainer extends Component {

    componentDidMount(){
        console.log("BEFORE:")
        // localhost 3000 is not working but is in the walkthrough
        fetch('http://localhost:3000/parks')
        .then(response => response.json())
        .then(data => this.setState({
            parks: data
        }))
        console.log("AFTER:")
    }
    
    render() {
        return (
            <div>
                <h1>This is the parkscontainer</h1>
                {/* renders all of the parks on the page */}
                {this.props.parks.map(p => <Park {...p} key={p.id} />)}


            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        parks: state
    }
}

export default connect(mapStateToProps)(ParkContainer);