import React from 'react';
import "../Styles/contentScreen.css";
import logo from "../bgimg1.png"

function ContentScreen() {
    return (
        <>
        <div className="welcome">
            <h2>Welcome to IB chemistry</h2>
            <h1>Structured Complete Course</h1>
            <h1>In Ib Chemistry</h1>
            <h3>Learn from the best having 20+ Years experience</h3>
            <a href="/" id="buyNowBtn">Buy Now</a>
        </div> 
        {/* <img className="bg1" src={logo} alt="img is here" /> */}
        </>
    )
}

export default ContentScreen;
