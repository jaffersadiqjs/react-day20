import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-root') || (() => {
  const el = document.createElement('div');
  el.id = 'portal-root';
  document.body.appendChild(el);
  return el;
})();

const withPortal = (WrappedComponent) => {
  return (props) => {
    return ReactDOM.createPortal(
      <WrappedComponent {...props} />,
      portalRoot
    );
  };
};

export default withPortal;
