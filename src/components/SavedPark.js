import React from 'react';

function SavedPark(props) {

    // const handleChange = (props) => {
    // //     // const { name, value } = event.target

    // //     // this.setState({
    // //     //     [name]: value
    // //     // })
    // }

    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={400} /><br></br>
            <form>
                <label>Attractions: </label><br></br>
                <textarea ></textarea><br></br>
                {/* <label>Notes: </label><br></br>
                <textarea ></textarea><br></br> */}
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default SavedPark;