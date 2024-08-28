import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPost = ({ title, excerpt, date, image, slug }) => (
    <div className="blog-post">
        <img src={image} alt={title} className="blog-image" />
        <div className="blog-content">
            <h3>{title}</h3>
            <p className="date">{date}</p>
            <p className="excerpt">{excerpt}</p>
            <Link to={`/blog/${slug}`} className="read-more">Read More</Link>
        </div>
    </div>
);

const BlogPage = () => {
    const blogPosts = [
        {
            title: "Top 5 Hidden Gems in Palm Springs",
            excerpt: "Discover the lesser-known attractions that make Palm Springs a unique destination...",
            date: "July 1, 2023",
            image: "/api/placeholder/400/300",
            slug: "top-5-hidden-gems"
        },
        {
            title: "A Day in the Life: Palm Springs Edition",
            excerpt: "Experience the perfect Palm Springs day, from sunrise hikes to starlit dinners...",
            date: "June 15, 2023",
            image: "/api/placeholder/400/300",
            slug: "day-in-the-life"
        },
        {
            title: "The History of Mid-Century Modern Architecture in Palm Springs",
            excerpt: "Explore the architectural movement that shaped Palm Springs' iconic skyline...",
            date: "May 30, 2023",
            image: "/api/placeholder/400/300",
            slug: "midcentury-modern-architecture"
        }
    ];

    return (
        <div className="blog-page">
            <div className="container">
                <h1>Our Blog</h1>
                <p className="intro">Stay updated with the latest news, local insights, and tips for your Palm Springs getaway.</p>

                <div className="blog-list">
                    {blogPosts.map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>

                <div className="pagination">
                    <button className="btn btn-secondary">Previous</button>
                    <button className="btn btn-secondary">Next</button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;