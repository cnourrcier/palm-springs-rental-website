import React from 'react';
import './AboutPage.css';

const TimelineItem = ({ year, event }) => (
  <div className="timeline-item">
    <div className="timeline-year">{year}</div>
    <div className="timeline-content">{event}</div>
  </div>
);

const NewspaperClipping = ({ imageSrc, alt }) => (
  <div className='newspaper-clipping'>
    <img src={imageSrc} alt={alt} />
  </div>
);

const CelebrityImage = ({ imageSrc, name }) => (
  <div className='celebrity-image'>
    <img src={imageSrc} alt={name} />
    <p>{name}</p>
  </div>
)

const AboutPage = () => {
  const celebrities = [
    { name: "Clark Gable", image: "https://via.placeholder.com/300x400.png?text=Clark+Gable" },
    { name: "Carole Lombard", image: "https://via.placeholder.com/300x400.png?text=Carole+Lombard" },
    { name: "Bing Crosby", image: "https://via.placeholder.com/300x400.png?text=Bing+Crosby" },
    { name: "Sammy Davis Jr.", image: "https://via.placeholder.com/300x400.png?text=Sammy+Davis+Jr." },
    { name: "Maurice Chevalier", image: "https://via.placeholder.com/300x400.png?text=Maurice+Chevalier" },
    { name: "Dan Kimball", image: "https://via.placeholder.com/300x400.png?text=Dan+Kimball" },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <h1>About Clark Gable Estate</h1>

        <section className="history-section">
          <h2>Our Rich History</h2>
          <p>Established in 1925, the Clark Gable Estate is the oldest home in Old Las Palmas, Palm Springs. This Spanish Colonial Revival estate was created by Master Architect McNeal Swasey for Los Angeles fashion designer and importer Mrs. Agnes Swobdi-Meade during the Roaring Twenties.</p>

          <div className="newspaper-clippings">
            <NewspaperClipping imageSrc="https://via.placeholder.com/300x200.png?text=Newspaper+Clipping+1" alt="Newspaper Clipping 1" />
            <NewspaperClipping imageSrc="https://via.placeholder.com/300x200.png?text=Newspaper+Clipping+2" alt="Newspaper Clipping 2" />
            <NewspaperClipping imageSrc="https://via.placeholder.com/300x200.png?text=Newspaper+Clipping+3" alt="Newspaper Clipping 3" />
          </div>

          <h3>Timeline</h3>
          <div className="timeline">
            <TimelineItem year="1925" event="Estate built by McNeal Swasey for Agnes Swobdi-Meade" />
            <TimelineItem year="1930s-40s" event="Clark Gable and Carole Lombard's desert hideaway" />
            <TimelineItem year="1950s-60s" event="Home to Dan Kimball (Secretary of the Navy) and Doris Fleeson (Syndicated Columnist)" />
            <TimelineItem year="1969-78" event="Residence of Shar Cracraft, Editor of Palm Springs Life Magazine" />
            <TimelineItem year="2000s" event="Hosted political fundraisers for Rep. Mary Bono" />
            <TimelineItem year="2015" event="Clark Gable Estate Garden Party 'Gable Awards'" />
          </div>
        </section>

        <section className="features-section">
          <h2>Notable Features</h2>
          <ul>
            <li>Breathtaking views of San Jacinto Mountains</li>
            <li>Large lot with lush gardens and mature palm trees</li>
            <li>Swimming pool and pool cabana</li>
            <li>Pickle Ball Court adaptable for outdoor events</li>
            <li>Private Casita above Garage</li>
            <li>Gated, private, and secluded, yet walking distance to downtown Palm Springs</li>
            <li>Original plaster moldings, ornate Spanish lighting, and period furnishings</li>
            <li>Pool table custom-made for Kirk Douglas</li>
          </ul>
        </section>

        <section className="celebrity-section">
          <h2>Celebrity Residents and Visitors</h2>
          <p>The Clark Gable Estate has been home to and visited by numerous celebrities over the years, including:</p>
          <div className='celebrity-gallery'>
            {celebrities.map((celebrity, index) => (
              <CelebrityImage key={index} imageSrc={celebrity.image} name={celebrity.name} />
            ))}
          </div>
        </section>

        <section className="legacy-section">
          <h2>Legacy and Preservation</h2>
          <p>The Clark Gable Estate's legacy is a compelling tapestry woven from the threads of visionary individuals who have called it home. From fashion designers to Hollywood icons, from influential columnists to military leaders, each resident has contributed to the rich history of this property.</p>
          <p>We are committed to preserving this historic gem. Recent renovations have restored architectural details and paint colors to their former glory. Restoration is an ongoing process, and we invite you to follow our journey as we continue these efforts.</p>
        </section>

        <section className="quote-section">
          <blockquote>
            "This house is part of Palm Springs heritage."
            <footer>- Joel Douglas, Son of Kirk Douglas</footer>
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;