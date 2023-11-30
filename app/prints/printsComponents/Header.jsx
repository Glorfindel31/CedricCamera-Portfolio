import style from '../[imageId]/page.module.css';
import Link from 'next/link';
import {IoMdArrowRoundBack} from 'react-icons/io';

const Header = ({}) => {
  return (
    <header className={style.header}>
      <Link href="/prints" className={style['btn-backprint']}>
        <IoMdArrowRoundBack />
        Back to Prints Gallery
      </Link>
      <h6>Shop</h6>
    </header>
  );
};

export default Header;
