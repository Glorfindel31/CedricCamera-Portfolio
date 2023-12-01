'use client';
import {useEffect} from 'react';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import style from './BtnUpPage.module.css';

export default function BtnUpPage() {
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let timerId = null;
    const toggleVisibility = () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        const btn = document.querySelector(`.${style['btn-up']}`);
        if (window.scrollY > 300) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      }, 150);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  return (
    <button className={style['btn-up']} onClick={scrollToTop} style={{display: 'none'}}>
      <div className={style['icon-box']}>
        <IoIosArrowDropupCircle className={style.icon} />
      </div>
    </button>
  );
}
