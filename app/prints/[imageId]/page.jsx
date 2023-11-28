'use client';
import {getLocalPrintingData} from '@utils/gallery-data';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';

export default function Shop({params}) {
  const {imageId} = params;
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let response;

    const storedData = localStorage.getItem('printingData');

    if (storedData) {
      response = JSON.parse(storedData);
    } else {
      response = getLocalPrintingData();
      localStorage.setItem('printingData', JSON.stringify(response));
    }

    const matchingData = response.data.find(item => item.asset_id === imageId);
    setImageData(matchingData);
    setIsLoading(false);
  }, [imageId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={style.container}>
      <div className={style['shop-frame']}>
        <header className={style.header}>
          <Link href="/prints" className={style['btn-backprint']}>
            <IoMdArrowRoundBack />
            Back to Prints Gallery
          </Link>
          <h6>Shop</h6>
        </header>
        <div className={style.content}>
          <div className={style['showcase']}>
            <div
              className={`${style.framed} ${style['frame-img-border']}`}
            >
              <div className={style['frame-mat']}>
                <Image
                  src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto/q_auto/${imageData.public_id}`}
                  alt={imageData.filename}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className={style.options}>
            <h6 className={style['image-title']}>
              {imageData.filename.replace(/-/g, ' ')}
            </h6>
            <label htmlFor="materiel">Materiel</label>
            <select name="materiel" id="materiel">
              <option value="">Canvas</option>
              <option value="">Paper</option>
            </select>
            <label htmlFor="size">Size</label>
            <select name="size" id="size">
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <label htmlFor="frame">Frame</label>
            <select name="frame" id="frame">
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Wood">Wood</option>
            </select>
            <button className={style.btn}>Order 1.500.000 VND</button>
            {/*description accordion*/}
            <div className={style.accordion}>
              <input
                type="checkbox"
                id="description"
                className={style['accordion-checkbox']}
              />
              <label htmlFor="description" className={style['accordion-label']}>
                Description{' '}
              </label>
              <div className={style['accordion-content-wrapper']}>
                <div className={style['accordion-content']}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                    quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quibusdam, quidem. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quibusdam, quidem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
