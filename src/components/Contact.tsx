import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <footer className="contact">
      <div className="photographer-info">
        <img src="/profile picture.jpg?height=200&width=200&text=Photographer" alt="Photographer" />
        <h2>John Doe</h2>
        <p>Professional Photographer</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <i className="icon-email">📧</i>
          <span>john.doe@example.com</span>
        </div>
        <div className="contact-item">
          <i className="icon-phone">📞</i>
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <i className="icon-location">📍</i>
          <span>New York, NY</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

