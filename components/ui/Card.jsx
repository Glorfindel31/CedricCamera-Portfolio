'use client';
import Image from 'next/image';
import Link from 'next/link';
import style from './Card.module.css';

export default function Card({...prop}) {
  //function to remove - and replace with space
  const title = prop.title.replace(/-/g, ' ');

  return (
    <div className={style.container}>
      <div className={style['card-header']}>
        <h5 className={style['card-title']}>{title}</h5>
      </div>
      <div className={style['img-container']}>
        <Image
          src={prop.src}
          alt={prop.alt}
          width={300} // replace with your image's width
          height={300} // replace with your image's height
        />
      </div>
      <p className={style['card-description']}>{prop.description}</p>
      <Link href={`/prints/${prop.slug}`} className={style['card-btn']}>
        SELECT
      </Link>
    </div>
  );
}
