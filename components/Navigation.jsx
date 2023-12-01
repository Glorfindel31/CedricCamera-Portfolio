'use client';
import Link from 'next/link';
import style from './Navigation.module.css';
import {IconContext} from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BiSun} from 'react-icons/bi';
import {useTheme} from 'next-themes';

export default function Navigation({navBar}) {
  const {theme, setTheme} = useTheme();
  const menuItems = navBar;
  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={style.navigation}>
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
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className={style.btn} href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
