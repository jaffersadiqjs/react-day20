import React, { useState } from 'react';
import './App.css'
import Lightbox from './Components/LightBox';
import ConfirmationDialog from './Components/ConfirmationDialog';
import ModalPopup from './Components/ModelPopup';
import Tooltip from './Components/ToolTip';
import Task from './Components/Task'

const images = [
  'https://via.placeholder.com/300x200/007BFF/ffffff?text=Image+1',
  'https://via.placeholder.com/300x200/28A745/ffffff?text=Image+2',
  'https://via.placeholder.com/300x200/DC3545/ffffff?text=Image+3',
];

function App() {
   const [showModal, setShowModal] = useState(false);
     const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState('No action taken.');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    setStatus('Item deleted successfully.');
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setStatus('Deletion cancelled.');
    setShowConfirm(false);
  };

  return (
    <>
      <Task />
          <div className="container mt-5 text-center">
      <h3>Mini Project 1: Modal Popup</h3>
      <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <ModalPopup onClose={() => setShowModal(false)}>
          <p>This is a modal popup using React Portal.</p>
          <button className="btn btn-danger mt-2" onClick={() => setShowModal(false)}>
            Close
          </button>
        </ModalPopup>
      )}
    </div>
    <div className="container mt-5">
      <h4>Mini Project 2: Tooltip Component</h4>
      <p className="mt-4">
        Hover over this{' '}
        <Tooltip text="This is extra information shown on hover.">
          <strong>important text</strong>
        </Tooltip>{' '}
        to see the tooltip.
      </p>
    </div>

    <div className="container mt-5">
      <h4>Mini Project 3: Confirmation Dialog</h4>
      <p>Status: <strong>{status}</strong></p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Item
      </button>

      {showConfirm && (
        <ConfirmationDialog
          message="Are you sure you want to delete this item?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>

    <div className="container mt-4">
      <h4>Mini Project 4: Image Lightbox</h4>
      <div className="row mt-3">
        {images.map((src, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <img
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              className="img-fluid rounded shadow-sm"
              onClick={() => setSelectedImage(src)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
    </>
  )
}

export default App
