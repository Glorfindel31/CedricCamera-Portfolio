'use client';
import Link from 'next/link';
import style from './Navigation.module.css';
import {IconContext} from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BiSun} from 'react-icons/bi';
import {useTheme} from 'next-themes';

export default function Navigation({
  FooterComponent,
  menuHeight,
  handleOpenModal,
  setSelectedGallery,
  currentGallery,
}) {
  const {theme, setTheme} = useTheme();

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const galleryTypes = {
    all: 'All Images',
    digiCo: 'Digital/Commercial',
    digiOth: 'Digital/Other',
    anaCo: 'Analogue/Commercial',
    anaOth: 'Analogue/Other',
  };

  return (
    <nav
      style={{
        height: menuHeight,
        transition: 'all 1s cubic-bezier(0.24, 0.06, 0.05, 0.95)',
      }}
      className={style.navigation}
    >
      <ul className="pl-2">
        <li>
          <div>
            <IconContext.Provider value={{className: style.icon}}>
              <input
                type="checkbox"
                className={style.checkbox}
                id="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <label htmlFor="checkbox" className={style['checkbox-label']}>
                <i>
                  <BsFillMoonStarsFill />
                </i>
                <i>
                  <BiSun />
                </i>
                <span className={style.ball}></span>
              </label>
            </IconContext.Provider>
          </div>
        </li>
        {Object.entries(galleryTypes).map(([type, label]) => (
          <li key={type}>
            <button
              className={`${style.btn} ${currentGallery === type ? style.selected : ''}`}
              onClick={() => setSelectedGallery(type)}
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <button className={style.btn}>
            <Link href="https://www.instagram.com/cedriccamera/" target="_blank">
              Instagram
            </Link>
          </button>
        </li>
        <li>
          <button className={style.btn} onClick={handleOpenModal}>
            Infos
          </button>
        </li>
      </ul>
      {FooterComponent && <FooterComponent />}
    </nav>
  );
}
