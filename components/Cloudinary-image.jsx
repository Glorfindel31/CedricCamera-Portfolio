'use client';
import {useState} from 'react';
import style from './CloudinaryImage.module.css';
import Image from 'next/image';

export default function CloudinaryImage({onClick, ...props}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={style['cld-image__container']} onClick={onClick}>
      {isLoading && (
        <div className={style['loader-container']}>
          <span className="loader"></span>
        </div>
      )}
      <Image
        className={`transition-opacity ${isLoading ? 'opacity-0' : ''} duration-1000`}
        onLoad={() => setIsLoading(false)}
        onLoadingComplete={image => image.classList.remove('opacity-0')}
        src={`${props.src}c_scale,w_${props.maxsize}/f_${props.formatchange}/q_${props.quality}/${props.asset}`}
        height={props.height}
        width={props.width}
        alt={`This is an image of ${props.alt}`}
      />
      <div className={style['cld-image__over']}></div>
    </div>
  );
}
