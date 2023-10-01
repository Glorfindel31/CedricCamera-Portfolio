'use client';
import {CldImage} from 'next-cloudinary';
import style from './CloudinaryImage.module.css';
export default function CloudinaryImage({onClick, ...props}) {
  return (
    <div className={style['cld-image__container']} onClick={onClick}>
      <CldImage {...props} quality={50} loading="lazy" />
      <div className={style['cld-image__over']}></div>
    </div>
  );
}
