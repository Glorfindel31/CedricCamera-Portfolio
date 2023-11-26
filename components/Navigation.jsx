'use client';
import Link from 'next/link';
import style from './navigation.module.css';
import {IconContext} from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BiSun} from 'react-icons/bi';
import {useTheme} from 'next-themes';

export default function Navigation({
  navBar,
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

  return (
    <nav
      style={{
        maxHeight: menuHeight,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease-in-out',
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
        {navBar &&
          Object.entries(navBar).map(([type, label]) => (
            <li key={type}>
              <button
                className={`${style.btn} ${
                  currentGallery === type ? style.selected : ''
                }`}
                onClick={() => setSelectedGallery(type)}
              >
                {label}
              </button>
            </li>
          ))}
        {/* <li>
          <button className={style.btn}>
            <Link href="/prints">Prints</Link>
          </button>
        </li> */}
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
