import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/ConfirmationDialog.css';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return ReactDOM.createPortal(
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
        <h5>⚠️ Confirm Action</h5>
        <p>{message}</p>
        <div className="text-end">
          <button className="btn btn-secondary me-2" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationDialog;
