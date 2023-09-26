'use client';
import {CldImage} from 'next-cloudinary';

export default function CloudinaryImage(props) {
  return <CldImage {...props} quality={50} />;
}
