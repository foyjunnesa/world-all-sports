import React from 'react';
import { Link as NavLink } from 'react-router-dom';

/*===========================Header=========================*/
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink
                activeStyle={activeStyle} f
                to="/about">About</NavLink>
            <NavLink to="/cource">Course</NavLink>
            <NavLink to="/owner">Owner</NavLink>
        </nav>
    );
};

export default Header;