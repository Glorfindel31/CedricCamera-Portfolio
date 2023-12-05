import Link from 'next/link';
import style from './Navigation.module.css';
import BtnTheme from './ui/BtnTheme';

export default function Navigation({...props}) {
  const menuItems = props.navBar;
  const location = props.location;
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <BtnTheme />
        </li>
        {menuItems.map((item, index) => {
          const linkProps = item.newTab ? {target: '_blank'} : {};
          const isSelected = location === item.name;
          const itemClass = isSelected
            ? `${style.btn} ${style.selected}`
            : `${style.btn}`;
          return (
            <li key={index} className={itemClass}>
              <Link href={item.path} {...linkProps}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
