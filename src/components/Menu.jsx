import { Link, Navigate } from 'react-router-dom';

function Menu(){


    return (
        <>
        <h2>Menu</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
        </nav>
        </>
    )
}

export default Menu;