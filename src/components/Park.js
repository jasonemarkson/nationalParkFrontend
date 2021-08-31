import React from 'react';

function Park(props) {
    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={600} />
        </div>
    )
}

export default Park;