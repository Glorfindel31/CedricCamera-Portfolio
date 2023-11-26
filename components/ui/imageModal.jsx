'use client';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import style from './imageModal.module.css';
import Image from 'next/image';

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
          <Image
            className={style['modal__popbox--image']}
            onLoadingComplete={image => image.classList.remove('opacity-0')}
            src={`${props.src}c_scale,h_${props.maxsize}/f_${props.formatchange}/q_${props.quality}/${props.asset}.${props.format}`}
            height={props.height}
            width={props.width}
            alt={props.alt}
            priority={true}
          />
        </div>
        <div className={style['modal__popbox--button-container']}>
          <button className={style.btn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
