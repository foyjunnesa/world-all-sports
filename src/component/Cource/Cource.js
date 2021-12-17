import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Cource.css'

/*=============================Cource========================*/
const Cource = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='back-ground'>
            <div>
                <h1 style={{ color: "red", textShadow: "1px 1px white", fontFamily: "system-ui", fontWeight: "bold" }}>WORLD ALL SPORTS</h1>
                <h2>Our courses: {courses.length}</h2>
            </div>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Cource;