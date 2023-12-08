'use client';
import {useState} from 'react';
import Image from 'next/image';
import style from './ImageGallery.module.css';
import Modal from './Modal';

const ImageGallery = ({public_id, asset_id, folder}) => {
  const [openModal, setOpenModal] = useState(false);

  //handler modal
  const modalHandler = () => {
    if (!openModal) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };
  return (
    <>
      <div className={style.item} onClick={modalHandler}>
        <Image
          src={`https://res.cloudinary.com/dduwp6ob6/Image/upload/f_auto,q_auto/${public_id}`}
          quality="auto"
          width={300}
          height={400}
          sizes="(max-width: 300px) 50vw, 20vw"
          alt={`Cedric Florentin - Copyrighted Image from my portfolio named ${
            (public_id, asset_id)
          }`}
          loading="lazy"
        />
      </div>
      {openModal && (
        <Modal isOpen={openModal} closeModal={modalHandler}>
          <Image
            src={`https://res.cloudinary.com/dduwp6ob6/Image/upload/f_auto,q_auto/${public_id}`}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{objectFit: 'contain'}}
            alt={`Cedric Florentin - Copyrighted Image from my portfolio named ${asset_id}`}
            loading="eager"
            onLoad={() => {
              console.log('loaded');
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
