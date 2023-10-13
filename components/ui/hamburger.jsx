import {useState} from 'react';
import styles from './hamburger.module.css';

export default function Hamburger({menuHeight, setMenuHeight}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuHeight(prevHeight => (prevHeight === '25rem' ? '0px' : '25rem'));
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const lineStyles = [
    {
      isOpen: styles.rotate45,
      isClosed: styles.translate0,
    },
    {
      isOpen: styles.opacity0,
      isClosed: styles.translate0,
    },
    {
      isOpen: styles.rotateMinus45,
      isClosed: styles.translate0,
    },
  ];

  return (
    <button className={styles.button} onClick={toggleMenu}>
      {lineStyles.map((style, index) => (
        <div
          key={index}
          className={`${styles.hamburgerLine} ${isOpen ? style.isOpen : style.isClosed}`}
        />
      ))}
    </button>
  );
}
