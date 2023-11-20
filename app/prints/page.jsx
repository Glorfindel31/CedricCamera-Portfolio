'use client';
import Image from 'next/image';
import Aside from '../../components/aside';
import style from './Page.module.css';
import BtnUpPage from '../../components/ui/btnUpPage';

const menuItems = {
  Price: 'Price List',
  Request: 'Request a Quote',
};

export default function PrintPage() {
  return (
    <div className={style['page-container']}>
      <BtnUpPage />
      <Aside navBar={menuItems} />
      <div className={style['main-container']}>
        <div className={style.header}>
          <h4 className={style.title}>Printing</h4>
          <p className={style.description}>
            Welcome in my shop, you will find a large choice of frame for the prints.
            Select your favorite in our catalog. Pick a frame and a size, and copy the
            link. Send us an emal with the link and we will send you a quote.
            <br />
            <span className={style.specials}>
              *Our deliveris are only available in Vietnam.
            </span>
          </p>
        </div>
        <div className={style.gallery}>
          <div className={style['img-container']}>
            <Image
              src="https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/v1/film/others/iez7137l6z87mbyelpkv"
              alt="prints-1"
              fill
              style={{objectFit: 'cover', objectPosition: 'center'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
