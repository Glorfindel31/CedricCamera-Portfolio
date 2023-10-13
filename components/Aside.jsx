'use client';
import React, {useState, useEffect} from 'react';
import InfosModal from '../components/ui/infosModal';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Hamburger from './ui/hamburger';
import style from './Aside.module.css';
import {Filter} from 'lucide-react';

export default function Aside({setSelectedGallery, selectedGallery}) {
  const [showModal, setShowModal] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 639 : false,
  );

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <aside className={style['aside-menu']}>
      <div className={style['aside-menu_logo-box']}>
        <h1 className={style['aside-menu_logo-box--logo']}>
          Cedric <span>Florentin</span>{' '}
        </h1>
        {isMobile && <Hamburger menuHeight={menuHeight} setMenuHeight={setMenuHeight} />}
      </div>
      {isMobile ? (
        <Navigation
          menuHeight={menuHeight}
          handleOpenModal={handleOpenModal}
          setSelectedGallery={setSelectedGallery}
          FooterComponent={Footer}
          currentGallery={selectedGallery}
        />
      ) : (
        <Navigation
          menuHeight={'25rem'}
          handleOpenModal={handleOpenModal}
          setSelectedGallery={setSelectedGallery}
          currentGallery={selectedGallery}
        />
      )}
      {!isMobile && <Footer />}
      <InfosModal show={showModal} onClose={handleCloseModal} />
    </aside>
  );
}
