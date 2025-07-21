import React from "react";
import { NavLink } from "react-router-dom";

import HeroImage from "./Images/Fin_back.png"; 



export default function HeroSection() {
    const heroStyle = {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        padding: "4rem 2rem",
        textAlign: "center",
        
    }



    return (
        <div className="hero-section text-center text-white d-flex align-items-center justify-content-center flex-column"  style={heroStyle} >
            <h1 className=" display-4 fw-bold">
               <span style={{ color: "#000000" }}> Accept payments from</span> <br/> <span style={{ color: "#00C28B" }}>credit cards</span>
            </h1>
            <p className="lead mt-3 text-dark">Simple and easy payments for your customers</p>
            <div className="mt-4">
                <NavLink to="/waitlist" className="btn btn-success me-3">Join the waitlist</NavLink>
                <NavLink to="/demo" className="btn btn-outline-success">Make demo payment</NavLink>
            </div>
            {/* Optional: Add your hero image here */}
           
        </div>
    );

}


