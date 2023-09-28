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
      <div className="relative z-10 grid w-full max-w-lg gap-2 border bg-background p-2 shadow-lg duration-200 rounded-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <CldImage {...props} className="object-contain max-h-[90vh] w-full" />
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button onClick={onClose} className="mt-2">
              X
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
