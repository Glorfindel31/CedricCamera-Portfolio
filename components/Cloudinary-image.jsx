'use client';
import style from './CloudinaryImage.module.css';
import Image from 'next/image';

export default function CloudinaryImage({onClick, ...props}) {
  return (
    <div className={style['cld-image__container']} onClick={onClick}>
      {/* <CldImage {...props} quality={50} loading="lazy" /> */}
      <Image
        className="transition-opacity opacity-0 duration-1000"
        onLoadingComplete={image => image.classList.remove('opacity-0')}
        src={`${props.src}c_scale,w_${props.maxsize}/f_${props.formatchange}/q_${props.quality}/${props.asset}.${props.format}`}
        height={props.height}
        width={props.width}
        alt={props.alt}
      />
      <div className={style['cld-image__over']}></div>
    </div>
  );
}
