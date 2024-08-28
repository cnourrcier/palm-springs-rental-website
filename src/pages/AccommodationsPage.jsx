import React from 'react';
import './AccommodationsPage.css';

const RoomCard = ({ name, description, image }) => (
    <div className="room-card">
        <img src={image} alt={name} className="room-image" />
        <div className="room-content">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const AccommodationsPage = () => {
    return (
        <div className="accommodations-page">
            <div className="container">
                <h1>Luxurious Accommodations</h1>
                <p className="intro">Experience the perfect blend of vintage charm and modern luxury in our thoughtfully appointed rooms and suites.</p>

                <div className="room-grid">
                    <RoomCard
                        name="The Gable Suite"
                        description="A spacious master suite featuring a king-size bed, vintage record player, and private balcony overlooking the pool."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                    />
                    <RoomCard
                        name="The Hollywood Glamour Room"
                        description="Channel your inner starlet in this art deco-inspired room with a queen-size bed and luxury vanity area."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                    />
                    <RoomCard
                        name="The Palm Oasis Cabana"
                        description="A private poolside cabana with a queen-size bed, perfect for those seeking a more secluded experience."
                        image="https://via.placeholder.com/400x300.png?text=Placeholder"
                    />
                </div>

                <div className="amenities">
                    <h2>Property Amenities and Features</h2>
                    <ul>
                        <li>Swimming pool and pool cabana</li>
                        <li>Outdoor kitchen and dining area</li>
                        <li>Lush gardens and mature palm trees</li>
                        <li>Pickle Ball Court adaptable for outdoor events</li>
                        <li>Private casita above Garage</li>
                        <li>Gated, private, secluded</li>
                        <li>Walking distance to Downtown Palm Springs</li>
                        <li>Pool table custom-made for Kirk Douglas </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccommodationsPage;