'use client';
import Image from 'next/image';
import style from './card.module.css';

export default function Card({...prop}) {
  //function to remove - and replace with space
  const title = prop.title.replace(/-/g, ' ');
  const description = prop.description.replace(/-/g, ' ');

  return (
    <div className={style.container}>
      <div className={style['card-header']}>
        <h5 className={style['card-title']}>{title}</h5>
        <p className={style['card-description']}>{description}</p>
      </div>
      <div className={style['img-container']}>
        <Image
          src={prop.src}
          alt={prop.alt}
          width={500} // replace with your image's width
          height={500} // replace with your image's height
        />
      </div>
      <button className={style['card-btn']}>SELECT</button>
    </div>
  );
}
