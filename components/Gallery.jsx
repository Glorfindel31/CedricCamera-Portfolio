'use client';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import style from './Gallery.module.css';
import Image from 'next/image';
import BtnUpPage from './ui/BtnUpPage';
import Modal from './Modal';

const DEFAULT_COLUMNS = 4;

export default function Gallery({imageData}) {
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const galleryRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

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

  //handler modal
  const modalHandler = () => {
    if (!openModal) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  return (
    <div ref={galleryRef} className={style.container}>
      <BtnUpPage galleryRef={galleryRef} />
      {Array.from({length: numColumns}, (_, idx) => (
        <div key={idx} className={style.column}>
          {(imageData.data || [])
            .filter((_, i) => i % numColumns === idx)
            .map(({public_id, asset_id, folder}) => (
              <div
                key={asset_id}
                className={style['column__item']}
                onClick={() => {
                  setSelectedImg({public_id, folder, asset_id});
                  modalHandler();
                }}
              >
                <Image
                  src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${public_id}`}
                  quality="auto"
                  width={300}
                  height={400}
                  sizes="(max-width: 300px) 50vw, 20vw"
                  alt={`Cedric Florentin - Copyrighted image from my portfolio named ${asset_id}`}
                  loading="lazy"
                />
              </div>
            ))}
          {selectedImg && (
            <Modal isOpen={openModal} closeModal={modalHandler}>
              <Image
                src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${selectedImg.public_id}`}
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{objectFit: 'contain'}}
                alt={`Cedric Florentin - Copyrighted image from my portfolio named ${selectedImg.asset_id}`}
                loading="eager"
                onLoad={() => {
                  console.log('loaded');
                }}
              />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}
