import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

const EventCard = ({ title, description, image, link }) => (
    <div className="event-card">
        <img src={image} alt={title} className="event-image" />
        <div className="event-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className="event-link">Learn more</Link>
        </div>
    </div>
);

const EventsPage = () => {
    return (
        <div className="events-page">
            <div className="container">
                <h1>Events & Experiences</h1>
                <p className="events-intro">Host your dream event in our historic Palm Springs retreat</p>

                <div className="event-grid">
                    <EventCard
                        title="Weddings"
                        description="Say 'I do' in a setting that blends timeless elegance with Palm Springs charm."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                        link="/events/weddings"
                    />
                    <EventCard
                        title="Photoshoots"
                        description="Capture stunning visuals in our picturesque property, perfect for fashion and film."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                        link="/events/photoshoots"
                    />
                    <EventCard
                        title="Corporate Events"
                        description="Inspire creativity and foster team building in our unique, historic setting."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                        link="/events/corporate"
                    />
                </div>

                <div className="custom-events">
                    <h2>Custom Events</h2>
                    <p>Have a unique event in mind? We'd love to help bring your vision to life. Contact us to discuss your custom event needs.</p>
                    <Link to="/contact" className="btn btn-primary">Inquire About Custom Events</Link>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;