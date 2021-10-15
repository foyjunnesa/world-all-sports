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
        <div>
            <h1>Programming Coaching Center</h1>
            <h2>Our courses: {courses.length}</h2>
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