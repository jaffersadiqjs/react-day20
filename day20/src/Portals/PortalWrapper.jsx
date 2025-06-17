import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('portal-root');

const PortalWrapper = ({ children }) => {
  return createPortal(children, portalRoot);
};

export default PortalWrapper;