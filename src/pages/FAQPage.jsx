import React, { useState } from 'react';
import './FAQPage.css';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const FAQPage = () => {
    const faqs = [
        {
            question: "What is the check-in and check-out time?",
            answer: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
        },
        {
            question: "Is the property pet-friendly?",
            answer: "We welcome well-behaved pets in our property. There is an additional pet fee of $50 per stay. Please inform us in advance if you plan to bring a pet."
        },
        {
            question: "How far is the property from Palm Springs International Airport?",
            answer: "Our property is located approximately 3 miles from Palm Springs International Airport, which is about a 10-minute drive."
        },
        {
            question: "Do you offer any special packages or discounts?",
            answer: "Yes, we offer seasonal promotions and discounts for extended stays. Please check our Special Offers page or contact us directly for current deals."
        },
        {
            question: "Is there a minimum stay requirement?",
            answer: "Our minimum stay is typically 2 nights, but this may increase to 3 or 4 nights during peak seasons or holidays."
        }
    ];

    return (
        <div className="faq-page">
            <div className="container">
                <h1>Frequently Asked Questions</h1>
                <p className="intro">Find answers to common questions about our Palm Springs Historic Retreat.</p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                <div className="contact-info">
                    <h2>Still have questions?</h2>
                    <p>Feel free to reach out to us directly. We're here to help!</p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                    <p className="mt-4">
                        For more tips and insights about Palm Springs, check out our <Link to="/blog" className="text-ps-terracotta hover:underline">blog</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;