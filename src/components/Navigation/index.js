import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            Employee Manager
<div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                </Link>
                    
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;