import React from 'react';

function SavedPark(props) {

    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={600} /><br></br>
        </div>
    );
}

export default SavedPark;