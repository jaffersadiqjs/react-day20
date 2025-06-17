import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../assets/ModalPopup.css'; 

const ModalPopup = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close float-end" onClick={onClose}></button>
        <h5 className="mb-3"> Welcome!</h5>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalPopup;
