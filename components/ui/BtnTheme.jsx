'use client';
import {IconContext} from 'react-icons';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BiSun} from 'react-icons/bi';
import {useTheme} from 'next-themes';
import style from './BtnTheme.module.css';

const BtnTheme = ({}) => {
  const {theme, setTheme} = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <IconContext.Provider value={{className: style.icon}}>
        <input
          type="checkbox"
          className={style.checkbox}
          id="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <label
          htmlFor="checkbox"
          className={style['checkbox-label']}
          role="switch"
          aria-checked={theme === 'dark' ? 'true' : 'false'}
        >
          <i>
            <BsFillMoonStarsFill />
          </i>
          <i>
            <BiSun />
          </i>
          <span className={style.ball}></span>
        </label>
      </IconContext.Provider>
    </>
  );
};

export default BtnTheme;
