'use client';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CldImage} from 'next-cloudinary';
import {Button} from './button';
import style from './ImageModal.module.css';

export default function ImageModal({show, onClose, ...props}) {
  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div onClick={onClose} className={style.modal}>
      <div className={style['modal__backdrop']}></div>

      <div className={style['modal__popbox']}>
        <div className={style['modal__popbox--image-container']}>
          <CldImage {...props} className={style['modal__popbox--image']} />
        </div>
        <div className={style['modal__popbox--button-container']}>
          <Button onClick={onClose}>X</Button>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
