import React from 'react';
import './About.css'
/*=================================About===========================*/
const About = () => {
    return (
        <div className='address-name'>

            <div className='address'>
                <h1>WORLD ALL SPORTS</h1>
                <h2>Address</h2>
                <p>
                    Road 104, House- 3G Building, Flat C4 & B4,Gulshan-2 ,
                    Dhaka-1212, Bangladesh. P.C. 1212, Gulshan, Dhaka.
                </p>
                <button style={{ backgroundColor: "red", color: "white", fontWeight: "bold", borderRadius: "5px", padding: '5px' }}>Contuct Us</button>
            </div>

        </div>
    );
};

export default About;