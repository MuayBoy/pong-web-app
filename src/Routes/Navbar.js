import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Icons/logoPong.svg"
import "../Styles/navbar.css"

export default function Navbar() {
    return (
        <header>
            <Link className="logo_container" to='/'><Logo className="logo logo_left"/></Link>
            <nav className="nav_links">
                <ul>
                    <li><Link className="link" to='/notpong1'>Not Pong 1</Link></li>
                    <li><Link className="link" to='/notpong2'>Not Pong 2</Link></li>
                </ul>
            </nav>
            {/* <Link to='/'><Logo className="logo logo_right"/></Link> */}
        </header>
    );
}