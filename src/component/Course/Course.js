import React from 'react';
import './Course.css'

/*================================Course==============================*/
const Course = (props) => {
    const { name, img, tournament, date, country } = props.course;
    const courseStyle = {
        border: '1px solid grey',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'lavender',
        boxShadow: "10px 10px 5px grey",
        margin: "5px"


    }
    return (
        <div style={courseStyle}>
            <img src={img} style={{ width: "300px" }} />
            <h2 style={{ fontWeight: 'bold' }}>Name: {name}</h2>
            <h4 style={{ fontWeight: "inherit" }}>Tournament: {tournament}</h4>
            <br></br>
            <h4>Date: {date}</h4>
            <h4 style={{ fontWeight: "bold" }}>Country: {country}</h4>
            <button style={{ backgroundColor: "DarkOrange", color: "white", fontWeight: "bold", borderRadius: "5px", padding: '5px' }}>Enroll Now</button>
        </div>
    );
};

export default Course;