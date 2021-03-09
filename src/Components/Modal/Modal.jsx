import st from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const ModalImage = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  const handleEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={st.Overlay} onClick={handleBackdropClose}>
      <div className={st.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default ModalImage;
