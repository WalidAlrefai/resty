import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

function Header() {
    return (
        <div className="header">
            <h1 className="title">RESTy</h1>
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/History">History</Link></li>
                    <li><Link to="/Help">Help</Link></li>
                    {/* <li><a href="/">Home</a></li> */}
                    {/* <li><a href="/History">History</a></li>
                    <li><a href="/Help">Help</a></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header