import React from 'react';
import { Link as NavLink } from 'react-router-dom';

/*===========================Header=========================*/
const Header = () => {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "red",
    //     textDecoration: "none"
    // }
    return (
        <nav style={{ backgroundColor: "#0f0826", marginTop: "", padding: "10px", textAlign: "left" }}>
            <NavLink style={{ color: "white", textDecoration: "none", fontWeight: "bold", padding: "20px", fontSize: "20px" }} to="/home">Home</NavLink>

            <NavLink style={{ color: "white", textDecoration: "none", fontWeight: "bold", padding: "20px", fontSize: "20px" }} to="/about">About</NavLink>

            <NavLink style={{ color: "white", textDecoration: "none", fontWeight: "bold", padding: "20px", fontSize: "20px" }} to="/cource">Course</NavLink>

            <NavLink style={{ color: "white", textDecoration: "none", fontWeight: "bold", padding: "20px", fontSize: "20px" }} to="/owner">Owner</NavLink>
        </nav >

    );
};

export default Header;