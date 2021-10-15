import React from 'react';

/*================================Course==============================*/
const Course = (props) => {
    const { name, learning, reg, fee } = props.course;
    const courseStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadious: '10px'
    }
    return (
        <div style={courseStyle}>
            <h2>Cource Name: {name}</h2>
            <h4>Learning: {learning}</h4>
            <h4>Registration: {reg}</h4>
            <h4>Fee: {fee}</h4>
        </div>
    );
};

export default Course;