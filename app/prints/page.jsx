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
          <div className={style.card}>
            <div className={style['card-header']}>
              <h5 className={style['card-title']}>Title</h5>
              <p className={style['card-description']}>Description</p>
            </div>
            <div className={style['img-container']}>
              <Image
                src="https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/v1/film/others/iez7137l6z87mbyelpkv"
                alt="prints-1"
                width={500} // replace with your image's width
                height={500} // replace with your image's height
              />
            </div>
            <button className={style['card-btn']}>SELECT</button>
          </div>
          <div className={style.card}>
            <div className={style['card-header']}>
              <h5 className={style['card-title']}>Title</h5>
              <p className={style['card-description']}>Description</p>
            </div>
            <div className={style['img-container']}>
              <Image
                src="https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/v1/digital/others/gvhzi4mnle0drtrf91ru"
                alt="prints-1"
                width={500} // replace with your image's width
                height={500} // replace with your image's height
              />
            </div>
            <button className={style['card-btn']}>SELECT</button>
          </div>
          <div className={style.card}>
            <div className={style['card-header']}>
              <h5 className={style['card-title']}>Title</h5>
              <p className={style['card-description']}>Description</p>
            </div>
            <div className={style['img-container']}>
              <Image
                src="https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/v1/digital/others/mna1ngaphptaymrepiyb"
                alt="prints-1"
                width={500} // replace with your image's width
                height={500} // replace with your image's height
              />
            </div>
            <button className={style['card-btn']}>SELECT</button>
          </div>
          <div className={style.card}>
            <div className={style['card-header']}>
              <h5 className={style['card-title']}>Title</h5>
              <p className={style['card-description']}>Description</p>
            </div>
            <div className={style['img-container']}>
              <Image
                src="https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto,q_auto/v1/film/others/bgpduuhqgasifxitayk8"
                alt="prints-1"
                width={500} // replace with your image's width
                height={500} // replace with your image's height
              />
            </div>
            <button className={style['card-btn']}>SELECT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
