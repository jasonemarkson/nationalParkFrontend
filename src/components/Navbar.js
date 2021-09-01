import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <Link to='/'>
                <button id="home">Home</button>
            </Link>
            <Link to='/parks'>
                <button id="parks">Parks</button>
            </Link>
            <Link to='/savedparks'>
                <button id="savedparks">Saved Parks</button>
            </Link>
        </div>
    )
}

export default Navbar