'use client';
import {getLocalPrintingData} from '@utils/gallery-data';
import {useCallback, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';

export default function Shop({params}) {
  const {imageId} = params;
  const [imageData, setImageData] = useState(null);

  const fetchData = useCallback(() => {
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
  }, [imageId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className={style.container}>
      <div className={style['shop-frame']}>
        <header className={style.header}>
          <Link href="/prints">Back to Prints Gallery</Link>
          <h6>Shop</h6>
        </header>
        <div className={style.content}>
          {imageData ? (
            <div className={style['showcase']}>
              <h5 className={style['image-title']}>
                {imageData.filename.replace(/-/g, ' ')}
              </h5>
              <Image
                src={imageData.secure_url}
                alt={imageData.filename}
                width={300}
                height={300}
              />
            </div>
          ) : (
            <span className="loader"></span>
          )}
          <div className={style.options}>
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
