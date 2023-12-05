'use client';
import React, {useState, useEffect, useCallback} from 'react';
import style from './GalleryColumn.module.css';
import Image from 'next/image';

const DEFAULT_COLUMNS = 4;
export default function GalleryColumn({imageData, ...props}) {
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const location = props.location;

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
    <div className={style.gallery}>
      {Array.from({length: numColumns}, (_, idx) => (
        <div key={idx} className={style['gallery-column']}>
          {(imageData.data || [])
            .filter((_, i) => i % numColumns === idx)
            .map(({name, path, public_id}) => (
              <div key={name} className={style['gallery--column--item']}>
                <a href={path} target="_blank" rel="noreferrer">
                  <Image
                    src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${public_id}`}
                    quality="auto"
                    width={500}
                    height={600}
                    alt={name}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
