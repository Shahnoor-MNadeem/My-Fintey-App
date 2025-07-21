import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"

//import "./HeroSection.css"; // optional for styling
import { NavLink } from "react-router-dom";
import fin from "./Images/Fintech_logo.png"; 



// Here, we display our Navbar
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light p-2">
                <NavLink className="navbar-brand" to="/">
                    <img style={{ "width": "80%" }} src={fin} alt=""></img>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item  me-3">
                            <NavLink className="nav-link"  to="/create">
                                Product
                            </NavLink>
                        </li>
                        <li className="nav-item  me-3">
                            <NavLink className="nav-link"  to="/create">
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item   me-3">
                            <NavLink className="nav-link" to="/create">
                                Customer
                            </NavLink>
                        </li>
                        <li className="nav-item  me-3">
                            <NavLink className="nav-link"  to="/create">
                                Resources
                            </NavLink>
                        </li>
                        <li className="nav-item  me-3">
                            <NavLink className="nav-link" style={{ "color": "#00C28B" }} to="/create">
                                Careers
                            </NavLink>
                        </li>
                        <li className="nav-item  me-3">
                            <NavLink className="nav-link"  to="/create">
                                Create Record
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}