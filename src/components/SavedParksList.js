import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSavedParks } from '../actions/SavedParksActions'
import SavedPark from './SavedPark'
import { MoonLoader } from 'react-spinners';

class SavedParksList extends Component {

    state = {
        search: ''
    }

    filterSavedParks = () => {
        return this.props.savedParks.filter(sp => sp.park.states.toLowerCase().includes(this.state.search.toLowerCase()))
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    render() {
        // console.log('propss', this.props);
        const {savedParks} = this.props
        return (
            <div>
                <form>
                    Search SavedParks by State Code: <input type="text" onChange={this.handleChange} value={this.state.search}/>
                </form>
                {
                    this.filterSavedParks().length > 0 ?
                    this.filterSavedParks().map((s, index) => <SavedPark key={index} savedParkId={s.id} {...s.park} attractions={s.attractions}/>) :
                    <h1 id="error">No Saved Park with that State Code</h1>
                
                }


                {/* {
                savedParks.length > 0 ? 
                savedParks.map((s, index) => <SavedPark key={index} savedParkId={s.id} {...s.park} attractions={s.attractions}/>) :
                <MoonLoader />
                } */}

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