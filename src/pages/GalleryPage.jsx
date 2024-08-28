import React, { useState } from 'react';
import './GalleryPage.css';

const images = [
  { id: 1, src: "/api/placeholder/800/600", alt: "Exterior view of the house" },
  { id: 2, src: "/api/placeholder/800/600", alt: "Living room with vintage decor" },
  { id: 3, src: "/api/placeholder/800/600", alt: "Pool area with palm trees" },
  { id: 4, src: "/api/placeholder/800/600", alt: "Master bedroom" },
  { id: 5, src: "/api/placeholder/800/600", alt: "Dining area with view" },
  { id: 6, src: "/api/placeholder/800/600", alt: "Garden path" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Photo Gallery</h1>
        <p className="intro">Explore the beauty and charm of our historic Palm Springs retreat.</p>
        
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-item" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <p>{selectedImage.alt}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;