'use client';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import style from './Gallery.module.css';
import Image from 'next/image';
import BtnUpPage from './ui/BtnUpPage';

const DEFAULT_COLUMNS = 4;
export default function Gallery({imageData}) {
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const galleryRef = useRef(null);

  // Function to handle screen resize
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1000) {
      setNumColumns(4);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 700) {
      setNumColumns(3);
    } else {
      setNumColumns(2);
    }
  }, []);

  // Handle screen resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize immediately after component is mounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div ref={galleryRef} className={style.container}>
      <BtnUpPage galleryRef={galleryRef} />
      {Array.from({length: numColumns}, (_, idx) => (
        <div key={idx} className={style.column}>
          {(imageData.data || [])
            .filter((_, i) => i % numColumns === idx)
            .map(({public_id, asset_id, ressource_type, folder}) => (
              <div key={asset_id} className={style['column__item']}>
                <Image
                  src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${public_id}`}
                  quality="auto"
                  width={500}
                  height={600}
                  alt={`${public_id} ${ressource_type}`}
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}