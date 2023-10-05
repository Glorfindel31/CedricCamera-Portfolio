'use client';
import {useState, useEffect} from 'react';
import {IoIosArrowDropupCircle} from 'react-icons/io';
import {IconContext} from 'react-icons';
import style from './btnUpPage.module.css';

export default function BtnUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down to given amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <button
      className={style['btn-up']}
      onClick={scrollToTop}
      style={{display: isVisible ? 'block' : 'none'}}
    >
      <div className={style['icon-box']}>
        <IoIosArrowDropupCircle className={style.icon} />
      </div>
    </button>
  );
}
