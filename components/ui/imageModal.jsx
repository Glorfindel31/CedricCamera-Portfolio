// ImageModal.jsx
'use client';

import React from 'react';
import {CldImage} from 'next-cloudinary';
import {Button} from '@/components/ui/button';

export default function ImageModal({show, onClose, ...props}) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-2">
        <CldImage {...props} className="object-contain max-h-[80vh] w-full" />
        <Button onClick={onClose} className="mt-2">
          X
        </Button>
      </div>
    </div>
  );
}
