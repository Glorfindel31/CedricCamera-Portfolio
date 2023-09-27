'use client';
import {CldImage} from 'next-cloudinary';

export default function CloudinaryImage({onClick, ...props}) {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <CldImage {...props} quality={50} loading="lazy" />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
}
