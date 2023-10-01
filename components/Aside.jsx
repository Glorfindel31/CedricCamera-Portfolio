'use client';
import React, {useState} from 'react';
import InfosModal from '../components/ui/infosModal';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Hamburger from './ui/hamburger';
import style from './Aside.module.css';

export default function Aside({setSelectedGallery}) {
  const [showModal, setShowModal] = useState(false);
  const [menuHeight, setMenuHeight] = useState('1px');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <aside className={style['aside-menu']}>
      <div className={style['aside-menu_logo-box']}>
        <h1 className={style['aside-menu_logo-box--logo']}>
          Cedric <span>Florentin</span>{' '}
        </h1>
        <Hamburger menuHeight={menuHeight} setMenuHeight={setMenuHeight} />
      </div>
      <Navigation
        menuHeight={menuHeight}
        handleOpenModal={handleOpenModal}
        setSelectedGallery={setSelectedGallery}
      />
      <Footer />
      <InfosModal show={showModal} onClose={handleCloseModal} />
    </aside>
  );
}
