import React from 'react';

const SimpleBox = ({ onClose }) => {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
         style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1050 }}
         onClick={onClose}>
      <div
        className="bg-white p-4 rounded shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <h5>Reusable Portal Box</h5>
        <p>This box is rendered via a reusable HOC Portal.</p>
        <button className="btn btn-outline-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SimpleBox;
