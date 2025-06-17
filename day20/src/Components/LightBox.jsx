import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/Lightbox.css';

const Lightbox = ({ imageSrc, onClose }) => {
  return ReactDOM.createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Full View" className="img-fluid" />
        <button className="btn btn-light close-btn" onClick={onClose}>×</button>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
