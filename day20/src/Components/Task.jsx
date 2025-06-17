import React, { useState, useEffect, useRef } from 'react';
import PortalWrapper from '../Portals/PortalWrapper';
import '../assets/StyledPortal.css'
import SimpleBox from './SimpleBox';
import withPortal from '../hoc/withPortal';

const PortalBox = withPortal(SimpleBox);

const Task2 = () => (
  <div className="container mt-4">
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Task 2. Basic Portal Setup</h4>
      </div>
        <PortalWrapper>
          {/* <div className="alert alert-info border position-fixed top-0 left-0 w-50 m-auto mt-2">
            This content is rendered outside the main DOM tree using a <strong>React Portal</strong>.
          </div> */}
        </PortalWrapper>
    </div>
  </div>
);

const Task3 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-4">
          <h4 className="mb-0">Task 3. Create Portal Modal</h4>
        <div className="card-body">
          <p>Implement a modal dialog using React Portals.</p>
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            Open Modal
          </button>
      </div>

      {show && (
        <PortalWrapper>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Portal Modal</h5>
                  <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>
                <div className="modal-body">
                  <p>This modal is rendered outside the main DOM hierarchy using a React Portal.</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShow(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task4 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container mt-4">
          <h4 className="mb-0">Task 4. CSS Styling with Portals</h4>
                <div className="card-body">
          <p>
           Apply custom styles to portal elements without 
affecting the parent component. </p>
          <button className="btn btn-warning" onClick={() => setVisible(true)}>
            Show Styled Portal
          </button>
      </div>

      {visible && (
        <PortalWrapper>
          <div className="custom-portal-box">
            <h5>Styled Portal Content</h5>
            <p>This box is styled with isolated CSS to avoid conflict with parent styles.</p>
            <button className="btn btn-outline-light mt-2" onClick={() => setVisible(false)}>
              Close
            </button>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task5 = () => {
  const [logs, setLogs] = useState([]);

  const logEvent = (source) => {
    setLogs((prev) => [...prev, `Clicked: ${source}`]);
  };

  const clearLogs = () => setLogs([]);

  return (
    <div className="container mt-4" onClick={() => logEvent('Parent')}>
          <h4 className="mb-0">Task 5. Event Bubbling with Portals</h4>
          <h5> Close the portal when clicking outside 
the modal.</h5>
        <div className="card-body">
          <p>Demonstrate event bubbling in portals by clicking on both 
the portal component and its parent. </p>
          <button className="btn btn-info" onClick={(e) => { e.stopPropagation(); logEvent('Portal Component'); }}>
            Open Portal
          </button>
      </div>

      <PortalWrapper>
        <div
          className="border rounded bg-light p-4 mt-3"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1050,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          }}
          onClick={() => logEvent('Portal')}
        >
          <h5>Portal Content</h5>
          <p>Click here and watch the event bubble to the parent.</p>
        </div>
      </PortalWrapper>

      <div className="mt-4">
        <h6>Event Log:</h6>
        <ul className="list-group">
          {logs.map((log, index) => (
            <li key={index} className="list-group-item">{log}</li>
          ))}
        </ul>
        {logs.length > 0 && (
          <button className="btn btn-outline-secondary mt-2" onClick={clearLogs}>
            Clear Log
          </button>
        )}
      </div>
    </div>
  );
};


const Task6 = () => {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <div className="container mt-4">
      <h4>6. Portal with Click Outside Detection</h4>
      <button className="btn btn-dark" onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <PortalWrapper>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          >
            <div className="bg-white p-4 rounded shadow" ref={modalRef}>
              <h5>Portal Modal</h5>
              <p>Clicking outside this modal will close it.</p>
              <button className="btn btn-secondary" onClick={() => setShow(false)}>
                Close
              </button>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task7 = () => {
  const [showOuter, setShowOuter] = useState(false);
  const [showInner, setShowInner] = useState(false);

  return (
    <div className="container mt-4">
        
      <h4>Task 7. Nested Portals</h4>
      <h5>Create a portal within another portal component</h5>
      <button className="btn btn-primary" onClick={() => setShowOuter(true)}>
        Open Outer Portal
      </button>

      {showOuter && (
        <PortalWrapper>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          >
            <div className="bg-white p-4 rounded shadow text-center">
              <h5>Outer Portal</h5>
              <p>This is the first-level portal.</p>
              <button className="btn btn-secondary me-2" onClick={() => setShowOuter(false)}>
                Close Outer
              </button>
              <button className="btn btn-info" onClick={() => setShowInner(true)}>
                Open Inner Portal
              </button>

              {showInner && (
                <PortalWrapper>
                  <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060 }}
                  >
                    <div className="bg-dark text-white p-4 rounded shadow text-center">
                      <h6> Inner Portal</h6>
                      <p>This portal is nested inside the outer one.</p>
                      <button className="btn btn-light" onClick={() => setShowInner(false)}>
                        Close Inner
                      </button>
                    </div>
                  </div>
                </PortalWrapper>
              )}
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task8 = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(name);
    setName('');
    setShow(false);
  };

  return (
    <div className="container mt-4">
      <h4>Task 8. Form Inside Portal</h4>
      <h5>Render a form component inside a portal and handle 
form submissions. </h5>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Open Form
      </button>

      {submitted && <p className="mt-3 text-success">Submitted Name: {submitted}</p>}

      {show && (
        <PortalWrapper>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <div className="bg-white p-4 rounded shadow" style={{ width: '300px' }}>
              <form onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-success me-2">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task9 = () => {
  const [showPortal1, setShowPortal1] = useState(false);
  const [showPortal2, setShowPortal2] = useState(false);

  return (
    <div className="container mt-4">
      <h4>Task 9. Multiple Portals</h4>
      <h6>Render two different portal components on the same 
page. </h6>
      <button className="btn btn-primary me-2" onClick={() => setShowPortal1(true)}>
        Open Portal 1
      </button>
      <button className="btn btn-success" onClick={() => setShowPortal2(true)}>
        Open Portal 2
      </button>

      {showPortal1 && (
        <PortalWrapper>
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
               style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="bg-white p-4 rounded shadow text-center">
              <h5>Portal 1</h5>
              <p>This is the first portal component.</p>
              <button className="btn btn-outline-primary" onClick={() => setShowPortal1(false)}>
                Close
              </button>
            </div>
          </div>
        </PortalWrapper>
      )}

      {showPortal2 && (
        <PortalWrapper>
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
               style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1060 }}>
            <div className="bg-dark text-white p-4 rounded shadow text-center">
              <h5>Portal 2</h5>
              <p>This is the second portal component.</p>
              <button className="btn btn-outline-light" onClick={() => setShowPortal2(false)}>
                Close
              </button>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task10 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-4">
      <h5>Task 10. Portal Tooltip</h5>
      <h6>Create a tooltip that appears on hover using React Portals.</h6>

      <button
        className="btn btn-outline-primary"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover Me
      </button>

      {show && (
        <PortalWrapper>
          <div
            className="position-fixed bg-dark text-white px-2 py-1 rounded"
            style={{
              top: '400px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.9rem',
              zIndex: 1050,
            }}
          >
            Tooltip via Portal
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};


const Task11 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-4">
      <h5>Task 11. Animation with Portals</h5>
      <h6>Add CSS animations to portal components when 
they mount or unmount. </h6>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Show Animated Modal
      </button>

      {show && (
        <PortalWrapper>
          <div className="portal-overlay" onClick={() => setShow(false)}>
            <div className="portal-box fade-in" onClick={(e) => e.stopPropagation()}>
              <h5>✨ Animated Portal</h5>
              <p>This portal fades in using CSS animation.</p>
              <button className="btn btn-outline-secondary" onClick={() => setShow(false)}>
                Close
              </button>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task12 = () => {
  const [show, setShow] = useState(false);
  const portalRef = useRef(null);

  useEffect(() => {
    if (show && portalRef.current) {
      portalRef.current.focus(); 
    }
  }, [show]);

  return (
    <div className="container mt-4">
      <h5>12. Accessing DOM Nodes in Portals</h5>
      <h6> Use useRef to access DOM nodes inside 
portal components. </h6>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Open Input in Portal
      </button>

      {show && (
        <PortalWrapper>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1050 }}
            onClick={() => setShow(false)}
          >
            <div
              className="bg-white p-4 rounded shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <h6>Focus on Input</h6>
              <input
                type="text"
                ref={portalRef}
                className="form-control"
                placeholder="Auto-focused input"
              />
              <button className="btn btn-outline-secondary mt-3" onClick={() => setShow(false)}>
                Close
              </button>
            </div>
          </div>
        </PortalWrapper>
      )}
    </div>
  );
};

const Task13 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-4">
      <h5>13. Reusable Portal Component (HOC)</h5>
      <h6> Create a higher-order component (HOC) that 
wraps components with portal functionality. </h6>
      <button className="btn btn-success" onClick={() => setShow(true)}>
        Show Portal Box
      </button>

      {show && <PortalBox onClose={() => setShow(false)} />}
    </div>
  );
};

function Task() {
  return (
    <>
        <Task2 />
        <br />
        <hr />
        <Task3 />
        <br />
        <hr />
        <Task4 />
        <br />
        <hr />
         <Task5 />
        <br />
        <hr />
        <Task6 />
        <br />
        <hr />
        <Task7 />
        <br />
        <hr />
        <Task8 />
        <br />
        <hr />
        <Task9 />
        <br />
        <hr />
        <Task10 />
        <br />
        <hr />
        <Task11 />
        <br />
        <hr />
        <Task12 />
          <br />
        <hr />
        <Task13 />
    </>
  )
}

export default Task 