import Footer from './Footer';
import Navigation from './Navigation';
import style from './Aside.module.css';
import Link from 'next/link';
import {TiArrowSortedDown} from 'react-icons/ti';

// The Aside component
export default function Aside({...props}) {
  return (
    <aside className={style.container}>
      <Link href={'/'} className={style.logo}>
        Cedric <span>Florentin</span>
      </Link>
      <input type="checkbox" className={style.checkbox} />
      <div className={style.arrow}>
        <TiArrowSortedDown />
      </div>
      <div className={style.content}>
        <Navigation navBar={props.navBar} location={props.location} />
        <Footer />
      </div>
    </aside>
  );
}
