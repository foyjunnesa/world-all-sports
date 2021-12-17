import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        /*==========================Footer==========================*/
        <div>
            <div className='button'>
                <button className='footer' style={{ margin: "20px", padding: "5px", fontWeight: "bold" }}>1</button>
                <button className='footer' style={{ margin: "10px", padding: "5px", fontWeight: "bold" }}>2</button>
                <button className='footer' style={{ margin: "10px", padding: "5px", fontWeight: "bold" }}>3</button>
                <button className='footer' style={{ margin: "10px", padding: "5px", borderRadious: "15px", fontWeight: "bold" }}>4</button>
            </div>

            <div className='about-name'>
                <div>
                    <h2 className='about'>About</h2>
                    <p>A sports film is a film genre that <br />uses sport as the theme of the film.</p>
                </div>
                <div className='contuct-us'>
                    <h2>CONTUCT US</h2>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://www.linkdin.com/">linkdin</a>
                    <a href="https://www.linkdin.com/">Linkdin</a>
                    <a href="https://www.gmail.com/">Gmail</a>

                </div>
            </div>
            <p className='footer-p'>@ Copyright 2021-2025</p>

        </div>
    );
};

export default Footer;