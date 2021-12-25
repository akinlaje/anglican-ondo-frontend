import { useEffect } from 'react';

const HandleClickOutside = ({ onOutsideClick, onInsideClick, container, children }) => {

  useEffect(() => {
    // console.log(container);
    const clickOutsideHandler = (event) => {
      event.stopPropagation();
      if (
        onOutsideClick &&
        container.current &&
        !container.current.contains(event.target)
      ) {
        // console.log(event.target);
        onOutsideClick();
      } else if (onInsideClick) {
        onInsideClick();
      }
    };
    document.addEventListener('click', clickOutsideHandler);
    return () => document.removeEventListener('click', clickOutsideHandler);
  }, [onOutsideClick, container, onInsideClick]);
  return children;
};

export default HandleClickOutside;
