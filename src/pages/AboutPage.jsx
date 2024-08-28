import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                <h1>About Our Historic Palm Springs Retreat</h1>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/api/placeholder/600/400" alt="Historic Palm Springs House" />
                    </div>
                    <div className="about-text">
                        <h2>A Legacy of Glamour and Relaxation</h2>
                        <p>
                            Built in the 1920s, our Palm Springs retreat has been a haven for Hollywood's elite for nearly a century.
                            From silver screen legends to modern-day celebrities, our property has hosted some of the biggest names in entertainment.
                        </p>
                        <p>
                            The house was designed by renowned architect [Architect Name], known for his distinctive Desert Modernism style.
                            It features [specific architectural features], which have been carefully preserved and restored over the years.
                        </p>
                        <h3>Notable Guests</h3>
                        <ul>
                            <li>Frank Sinatra (1950s)</li>
                            <li>Marilyn Monroe (1960s)</li>
                            <li>[Other notable guests]</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline">
                    <h2>Our History</h2>
                    {/* Add an interactive timeline here */}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;