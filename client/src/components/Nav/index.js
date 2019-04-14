import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="row">
            <div className="nav-wrapper center-align">
                <Link to="/" className="logo col s6">
                    <h4>Book Search</h4>
                </Link>
                <div className="col s0 m2"></div>
                <ul className="links col s6 m4">
                    <li>
                        <Link to="/" className={window.location.pathname === "/" ? "link active" : "link"}>
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "link active" : "link"}>
                            Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;