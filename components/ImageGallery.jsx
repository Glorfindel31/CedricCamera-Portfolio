'use client';
import {useState} from 'react';
import Image from 'next/image';
import style from './ImageGallery.module.css';
import Modal from './Modal';

const ImageGallery = ({public_id, asset_id, folder}) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isModalLoaded, setIsModalLoaded] = useState(true);

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
        {isLoaded && (
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <Image
          className={`transition-opacity ${isLoaded ? 'opacity-0' : ''} duration-1000`}
          onLoad={event => {
            setIsLoaded(false);
            event.target.classList.remove('opacity-0');
          }}
          src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${public_id}`}
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
          {isModalLoaded && (
            <div
              role="status"
              className="absolute space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center w-full h-full"
            >
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <Image
            src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/${public_id}`}
            quality={90}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{objectFit: 'contain'}}
            alt={`Cedric Florentin - Copyrighted Image from my portfolio named ${asset_id}`}
            loading="eager"
            className={`transition-opacity ${isLoaded ? 'opacity-0' : ''} duration-1000`}
            onLoad={event => {
              setIsModalLoaded(false);
              event.target.classList.remove('opacity-0');
            }}
          />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
