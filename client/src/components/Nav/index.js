import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="valign-wrapper">
            <div calssName="nav-wrapper">
                <ul className="links">
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