'use client';
import style from './Modal.module.css';

const Modal = ({isOpen, closeModal, children}) => {
  const modal = isOpen ? (
    <div className={style.backdrop} onClick={closeModal}>
      <div className={style.container}>{children}</div>
    </div>
  ) : null;
  return modal;
};

export default Modal;
