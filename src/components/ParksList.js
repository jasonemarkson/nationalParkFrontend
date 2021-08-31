import React from 'react'
import { connect } from 'react-redux'
import Park from './Park'


const ParksList= ({ parks }) => {  
    return (
        <div>
            {parks.map((park, key) => <Park key={park.id} {...park} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return { parks: state.parks}
}


export default connect(mapStateToProps)(ParksList);
