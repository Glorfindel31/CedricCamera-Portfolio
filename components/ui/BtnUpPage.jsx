'use client';
import {useEffect} from 'react';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import style from './BtnUpPage.module.css';

export default function BtnUpPage({galleryRef}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let timerId = null;
    const currentGalleryRef = galleryRef.current;
    const toggleVisibility = () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        const btn = document.querySelector(`.${style['btn-up']}`);
        const windowScrollY = window.scrollY;
        const galleryScrollY = galleryRef.current ? galleryRef.current.scrollTop : 0;
        const scrollY = windowScrollY || galleryScrollY;
        if (scrollY > 300) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      }, 150);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      if (galleryRef.current) {
        galleryRef.current.addEventListener('scroll', toggleVisibility);
      }
      return () => {
        if (currentGalleryRef) {
          currentGalleryRef.removeEventListener('scroll', toggleVisibility);
        }
      };
    }
  }, [galleryRef]);

  return (
    <button className={style['btn-up']} onClick={scrollToTop} style={{display: 'none'}}>
      <div className={style['icon-box']}>
        <IoIosArrowDropupCircle className={style.icon} />
      </div>
    </button>
  );
}
