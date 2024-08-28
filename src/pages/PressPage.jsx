import React from 'react';
import './PressPage.css';
import { Link } from 'react-router-dom';

const PressItem = ({ title, publication, date, link }) => (
    <div className="press-item">
        <h3>{title}</h3>
        <p className="publication">{publication}</p>
        <p className="date">{date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="read-more">Read Article</a>
    </div>
);

const PressPage = () => {
    const pressItems = [
        {
            title: "Palm Springs' Hidden Gem: A Step Back in Time",
            publication: "Travel & Leisure",
            date: "June 15, 2023",
            link: "#"
        },
        {
            title: "The Ultimate Hollywood Getaway in Palm Springs",
            publication: "Architectural Digest",
            date: "April 3, 2023",
            link: "#"
        },
        {
            title: "Preserving History: Palm Springs' Iconic Retreats",
            publication: "Preservation Magazine",
            date: "March 10, 2023",
            link: "#"
        }
    ];

    return (
        <div className="press-page">
            <div className="container">
                <h1>Press & Media</h1>
                <p className="intro">Discover what the media is saying about our historic Palm Springs retreat.</p>

                <div className="press-list">
                    {pressItems.map((item, index) => (
                        <PressItem key={index} {...item} />
                    ))}
                </div>

                <div className="media-kit">
                    <h2>Media Kit</h2>
                    <p>For press inquiries or to request our media kit, please contact our PR team:</p>
                    <p><strong>Email:</strong> press@pshistoricretreat.com</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <a href="#" className="btn btn-secondary">Download Media Kit</a>
                    <p className="mt-4">
                        For general inquiries, please visit our <Link to="/contact" className="text-ps-terracotta hover:underline">contact page</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PressPage;