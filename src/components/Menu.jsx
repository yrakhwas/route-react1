import { Link, Navigate } from 'react-router-dom';
import { Button } from 'antd';
function Menu(){


    return (
        <>
        <h2>Menu</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
        </nav>
        <Button color="green" type="primary" variant='filled'>Click me</Button>
        </>
    )
}

export default Menu;