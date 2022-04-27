import React from "react";
// import { Link } from "react-router-dom";
import './header.scss'

function Header() {
    return (
        <div className="header">
            <h1>RESTy</h1>
            <nav className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/History">History</a></li>
                    <li><a href="/Help">Help</a></li>
                </ul>
                {/* <a href="/">Home</a>
                <a href="/History">History</a>
                <a href="/Help">Help</a> */}
            </nav>
        </div>
    );
}

export default Header