'use client';
import React, {useState, useEffect, useContext} from 'react';
import {GalleryContext} from '../utils/contextProviderGallery';
import InfosModal from './ui/infosModal';
import Footer from './footer';
import Navigation from './navigation';
import Hamburger from './ui/hamburger';
import style from './aside.module.css';

// The Aside component
export default function Aside({navBar}) {
  // State variables for modal visibility, menu height and mobile view
  const context = useContext(GalleryContext);
  const selectedGallery = context ? context.selectedGallery : null;
  const setSelectedGallery = context ? context.setSelectedGallery : () => {};
  const [showModal, setShowModal] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 639 : false,
  );
  // Function to open the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Effect hook to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Render the Aside component
  return (
    <aside className={style['aside-menu']}>
      <div className={style['aside-menu_logo-box']}>
        <div className={style['aside-menu_logo-box--logo']}>
          Cedric <span>Florentin</span>{' '}
        </div>
        {/* Show the Hamburger menu if in mobile view */}
        {isMobile && <Hamburger menuHeight={menuHeight} setMenuHeight={setMenuHeight} />}
      </div>
      {/* Show different Navigation based on whether it's mobile view or not */}
      {isMobile ? (
        <Navigation
          navBar={navBar}
          menuHeight={menuHeight}
          handleOpenModal={handleOpenModal}
          setSelectedGallery={setSelectedGallery}
          FooterComponent={Footer}
          currentGallery={selectedGallery}
        />
      ) : (
        <Navigation
          navBar={navBar}
          menuHeight={'25rem'}
          handleOpenModal={handleOpenModal}
          setSelectedGallery={setSelectedGallery}
          currentGallery={selectedGallery}
        />
      )}
      {/* Show Footer if not in mobile view */}
      {!isMobile && <Footer />}
      {/* InfosModal component */}
      <InfosModal show={showModal} onClose={handleCloseModal} />
    </aside>
  );
}
