import React, { useState } from 'react';
import Map, { Marker, Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './LocationPage.css';
import { Link } from 'react-router-dom';

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

const propertyLocation = {
    latitude: 33.8303,
    longitude: -116.5453,
    zoom: 13
};

const attractions = [
    { name: "Palm Springs Aerial Tramway", latitude: 33.8162, longitude: -116.6449 },
    { name: "Palm Springs Art Museum", latitude: 33.8243, longitude: -116.5465 },
    { name: "Joshua Tree National Park", latitude: 33.8734, longitude: -115.9010 },
    { name: "Downtown Palm Springs", latitude: 33.8303, longitude: -116.5453 }
];

const mapStyles = [
    { name: "Streets", url: "mapbox://styles/mapbox/streets-v11" },
    { name: "Satellite", url: "mapbox://styles/mapbox/satellite-v9" },
    { name: "Light", url: "mapbox://styles/mapbox/light-v10" },
    { name: "Dark", url: "mapbox://styles/mapbox/dark-v10" }
];

const CustomMarker = ({ onClick }) => (
    <div className="custom-marker" onClick={onClick}>
        {/* <img src="/api/placeholder/32/32" alt="Palm Springs Historic Retreat" /> */}
    </div>
);

const AttractionCard = ({ name, description, distance }) => (
    <div className="attraction-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="distance">{distance} from property</p>
    </div>
);

const LocationPage = () => {
    const [popupInfo, setPopupInfo] = useState(null);
    const [currentStyle, setCurrentStyle] = useState(mapStyles[0].url);

    return (
        <div className="location-page">
            <div className="container">
                <h1>Our Location</h1>
                <p className="intro">Discover the perfect blend of tranquility and excitement in the heart of Palm Springs.</p>

                <div className="location-content">
                    <div className="map-container">
                        <Map
                            initialViewState={propertyLocation}
                            style={{ width: '100%', height: 400 }}
                            mapStyle={currentStyle}
                            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                        >
                            <Marker
                                longitude={propertyLocation.longitude}
                                latitude={propertyLocation.latitude}
                            >
                                <CustomMarker onClick={() => setPopupInfo({
                                    longitude: propertyLocation.longitude,
                                    latitude: propertyLocation.latitude,
                                    name: "Palm Springs Historic Retreat",
                                    address: "123 Palm Springs Blvd, Palm Springs, CA 92262"
                                })} />
                            </Marker>

                            {attractions.map((attraction, index) => (
                                <Marker
                                    key={index}
                                    longitude={attraction.longitude}
                                    latitude={attraction.latitude}
                                    color="#F2CC8F"
                                    onClick={() => setPopupInfo(attraction)}
                                />
                            ))}

                            {popupInfo && (
                                <Popup
                                    anchor="bottom"
                                    longitude={popupInfo.longitude}
                                    latitude={popupInfo.latitude}
                                    onClose={() => setPopupInfo(null)}
                                >
                                    <div>
                                        <h3>{popupInfo.name}</h3>
                                        {popupInfo.address && <p>{popupInfo.address}</p>}
                                    </div>
                                </Popup>
                            )}

                            <NavigationControl position="top-right" />
                            <FullscreenControl position="top-right" />
                            <GeolocateControl position="top-right" />
                        </Map>

                        <div className="map-style-switcher">
                            {mapStyles.map((style, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentStyle(style.url)}
                                    className={currentStyle === style.url ? 'active' : ''}
                                >
                                    {style.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="location-info">
                        <h2>Palm Springs Historic Retreat</h2>
                        <p>123 Palm Springs Blvd, Palm Springs, CA 92262</p>
                        <h3>Getting Here</h3>
                        <ul>
                            <li><strong>From Palm Springs International Airport:</strong> 10-minute drive</li>
                            <li><strong>From Los Angeles:</strong> 2-hour drive</li>
                            <li><strong>From San Diego:</strong> 2.5-hour drive</li>
                        </ul>
                    </div>
                </div>

                <section className="nearby-attractions">
                    <h2>Nearby Attractions</h2>
                    <div className="attractions-grid">
                        <AttractionCard
                            name="Palm Springs Aerial Tramway"
                            description="Rotating tram car with spectacular views of Chino Canyon."
                            distance="4 miles"
                        />
                        <AttractionCard
                            name="Palm Springs Art Museum"
                            description="Modern and contemporary art museum with a sculpture garden."
                            distance="1.5 miles"
                        />
                        <AttractionCard
                            name="Joshua Tree National Park"
                            description="Vast desert park with unique rock formations and diverse ecosystems."
                            distance="40 miles"
                        />
                        <AttractionCard
                            name="Downtown Palm Springs"
                            description="Vibrant area with shops, restaurants, and entertainment."
                            distance="0.5 miles"
                        />
                    </div>
                </section>

                <section className="transportation">
                    <h2>Local Transportation</h2>
                    <ul>
                        <li>Car rentals available at Palm Springs International Airport</li>
                        <li>Uber and Lyft services readily available in the area</li>
                        <li>Local bus service operated by SunLine Transit Agency</li>
                        <li>Bike rentals available for eco-friendly exploration</li>
                    </ul>
                    <p className="mt-4">
                        For more information about transportation or to arrange a pickup, please <Link to="/contact" className="text-ps-terracotta hover:underline">contact us</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LocationPage;