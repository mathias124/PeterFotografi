import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <footer className="contact">
      <div className="photographer-info">
        <img src="/profile picture.jpg?height=200&width=200&text=Photographer" alt="Photographer" />
        <h2>Peter Schrader</h2>
        <p>Professional Photographer</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <i className="icon-email">📧</i>
          <span>ps@fotografi.com?</span>
        </div>
        <div className="contact-item">
          <i className="icon-phone">📞</i>
          <span>+45 40 18 80 15</span>
        </div>
        <div className="contact-item">
          <i className="icon-location">📍</i>
          <span>Copenhagen, Denmark</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

