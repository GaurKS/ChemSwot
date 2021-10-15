import React from 'react';
import "../Styles/navbar.css"

function NavBar() {
    return (
        <div className="container">
            <div className="orgName">
                <h2 id="redBold">Chem</h2>
                <h2 id="swot">Swot</h2>
            </div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/">Resources</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>
        </div>
    )
}

export default NavBar;
