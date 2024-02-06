
import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/aboutMe" className="footer-link">About Me</a>
                <a href="/projects" className="footer-link">Projects</a>
                <a href="/contact" className="footer-link">Contact Me</a>
            </div>
            <p className="footer-text">© 2024 Denisa Hategan. All rights reserved.</p>
        </div>
    );
}

export default Footer;
