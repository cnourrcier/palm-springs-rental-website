import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <img src="/api/placeholder/1920/1080" alt="Palm Springs Historic House" className="hero-image" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Experience Palm Springs' Most Glamorous Retreat</h1>
                    <p>Step into Hollywood's Golden Age at our historic rental house</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Book Now</Link>
                        <Link to="/gallery" className="btn btn-secondary">View Gallery</Link>
                    </div>
                </div>
            </div>

            <section className="welcome-section">
                <div className="container">
                    <h2>Welcome to Palm Springs' Historic Gem</h2>
                    <p>
                        Nestled in the heart of Palm Springs, our historic rental house offers a unique blend of Old Hollywood glamour and modern luxury. With its rich history of celebrity guests and stunning architectural features, it's the perfect venue for unforgettable events, weddings, and photoshoots.
                    </p>
                    <Link to="/about" className="learn-more-link">Learn more about our history</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;