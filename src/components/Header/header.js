import React from "react";
// import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <div className="header">
            <h1>RESTy</h1>
            <nav className="nav-bar">
                <a href="/">Home</a>
                <a href="/History">History</a>
                <a href="/Help">Help</a>
            </nav>
        </div>
    );
}

export default Header