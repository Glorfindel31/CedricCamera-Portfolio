'use client';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CldImage} from 'next-cloudinary';
import {Button} from './button';

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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>

      <div className="relative z-10 grid gap-2 border bg-background p-2 shadow-lg duration-200 rounded-lg m-auto">
        <div className="flex justify-center items-center  border-2">
          <CldImage {...props} className="object-contain max-h-[85vh] w-auto" />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button onClick={onClose} className="mt-2">
            X
          </Button>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
