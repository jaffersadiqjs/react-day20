import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../assets/ToolTip.css';

const Tooltip = ({ children, text }) => {
  const [position, setPosition] = useState(null);
  const targetRef = useRef(null);

  const showTooltip = () => {
    const rect = targetRef.current.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY - 35,
      left: rect.left + rect.width / 2,
    });
  };

  const hideTooltip = () => setPosition(null);

  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="tooltip-target"
      >
        {children}
      </span>

      {position &&
        ReactDOM.createPortal(
          <div
            className="tooltip-box"
            style={{
              top: position.top,
              left: position.left,
              transform: 'translateX(-50%)',
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
