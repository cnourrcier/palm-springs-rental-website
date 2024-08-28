import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Palm Springs Historic Retreat</h3>
                        <p>Experience the glamour of Old Hollywood in our luxurious Palm Springs rental property.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/accommodations">Accommodations</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/location">Location</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/press">Press</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>123 Palm Springs Blvd, Palm Springs, CA 92262</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@pshistoricretreat.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Palm Springs Historic Retreat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;