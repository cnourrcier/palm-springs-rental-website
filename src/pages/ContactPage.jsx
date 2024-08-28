import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1>Contact Us</h1>
                <p className="intro">Have a question or want to book your stay? We'd love to hear from you!</p>

                <div className="contact-content">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p><strong>Address:</strong> 123 Palm Springs Blvd, Palm Springs, CA 92262</p>
                        <p><strong>Phone:</strong> (555) 123-4567</p>
                        <p><strong>Email:</strong> info@pshistoricretreat.com</p>
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            {/* Add social media icons/links here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;