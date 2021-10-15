import React from 'react'
import "../Styles/features.css";
import bgimg from "../bgimg2.png"

function Features() {
    return (
        <div>
            <h2 className="nav">FEATURES</h2>
            
            <div className="wrapper">
                <div className="mainHead">
                    <h1>Chemswot Offers the</h1>
                    <h1>Following Main Benefits</h1>   
                </div>
                <div className="sideNote">
                    <h3>Our Resources will help you achieve</h3>
                    <h3>your Ib diploma score by our</h3>
                    <h3>accurate topic detail capturing</h3>
                </div>
            </div>
            <div className="down">
                <img src={bgimg} alt="img" />
            </div>       
        </div>
    )
}

export default Features
