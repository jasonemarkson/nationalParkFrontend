import React from 'react';

function Park(props) {

    return (
        <div>
            <h2>{props.fullName}</h2>
            <p>State(s): {props.states}</p>
            <p>{props.description}</p>
            <img src={props.images[0].url} alt={props.images[0].title} max-width={100} height={600} /><br></br>
            <button onClick={() => console.log("we'll need to add an event handler to add this park to the wishlist")}
            >Add to Wishlist</button>
        </div>
    )
}

export default Park;