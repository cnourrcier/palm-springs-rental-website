import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPexelsVideo } from '../utils/pexelsAPI';
import './HomePage.css';

const HomePage = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const loadVideo = async () => {
            const url = await fetchPexelsVideo();
            setVideoUrl(url);
        };
        loadVideo();
    }, []);

    return (
        <div className="home-page">
            <div className="hero-section">
                {videoUrl ? (
                    <video autoPlay muted loop className="hero-video">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src="https://via.placeholder.com/1920x1080.png?text=Palm+Springs+Retreat"
                        alt="Palm Springs Historic House"
                        className="hero-image"
                    />
                )}
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
                    <div className="image-showcase">
                        <img src="https://via.placeholder.com/400x300.png?text=Poolside" alt="Poolside view" />
                        <img src="https://via.placeholder.com/400x300.png?text=Interior" alt="Luxurious interior" />
                        <img src="https://via.placeholder.com/400x300.png?text=Garden" alt="Beautiful garden" />
                    </div>
                    <Link to="/about" className="learn-more-link">Learn more about our history</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;