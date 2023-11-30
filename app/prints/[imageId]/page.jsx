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
  const [frameStyle, setFrameStyle] = useState({});
  const [matStyle, setMatStyle] = useState({});
  const [showcaseColor, setShowcaseColor] = useState('#ffffff');
  const [price, setPrice] = useState(500000);
  const [selectedOptions, setSelectedOptions] = useState({
    materiel: 'canvas',
    size: '20',
    frame: 'Black',
    price: 500000,
  });

  const sizeComputation = (width, aspectRatio) =>
    `${width}x${Math.floor(width * aspectRatio)} cm`;

  const getSoldPrice = (artPrice, printPrice, size, framePrice) => {};

  const handleSelectorChange = event => {
    const {name, value} = event.target;

    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedOptions.materiel === 'framed') {
      setFrameStyle({
        borderWidth: `calc((34vw * 2) / ${selectedOptions.size})`,
      });
      setMatStyle({
        padding: `calc((34vw * 2) / ${selectedOptions.size})`,
      });
    } else {
      setFrameStyle({});
      setMatStyle({});
    }
  }, [selectedOptions.materiel, selectedOptions.size]);

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
          <div
            id="showcase"
            className={style['showcase']}
            style={{backgroundColor: showcaseColor}}
          >
            <div
              id="frame"
              className={`${style['img-size']} ${
                style[
                  `${
                    selectedOptions.materiel === 'framed'
                      ? `framed-${selectedOptions.frame.toLowerCase()}`
                      : ''
                  }`
                ]
              }`}
              style={frameStyle}
            >
              <div
                id="mat"
                className={
                  selectedOptions.materiel === 'framed' ? style['frame-mat'] : ''
                }
                style={matStyle}
              >
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
            <select
              name="materiel"
              id="materiel"
              value={selectedOptions.materiel}
              onChange={handleSelectorChange}
            >
              <option value="canvas">Canvas</option>
              <option value="paper">Paper</option>
              <option value="framed">Framed</option>
            </select>
            <label htmlFor="size">Size</label>
            <select
              name="size"
              id="size"
              value={selectedOptions.size}
              onChange={handleSelectorChange}
            >
              <option value="20">{sizeComputation(20, imageData.aspect_ratio)}</option>
              <option value="40">{sizeComputation(40, imageData.aspect_ratio)}</option>
              <option value="60">{sizeComputation(60, imageData.aspect_ratio)}</option>
            </select>
            {selectedOptions.materiel === 'framed' && (
              <>
                <label htmlFor="frame">Frame</label>
                <select
                  name="frame"
                  id="frame"
                  value={selectedOptions.frame}
                  onChange={handleSelectorChange}
                >
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Wood">Wood</option>
                </select>
              </>
            )}
            <label htmlFor="colorPicker">Pick the color of your wall.</label>
            <input
              name="colorPicker"
              type="color"
              value={showcaseColor}
              onChange={event => setShowcaseColor(event.target.value)}
            />
            <button className={style.btn}>
              Order {price.toLocaleString('vn-VN')} VND
            </button>
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
