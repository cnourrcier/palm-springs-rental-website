import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import AccommodationsPage from './pages/AccommodationsPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import PressPage from './pages/PressPage';

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/accommodations" element={<AccommodationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/press" element={<PressPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
