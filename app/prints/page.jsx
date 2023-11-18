'use client';
import Aside from '../../components/aside';
import style from './Page.module.css';
import BtnUpPage from '../../components/ui/btnUpPage';

const menuItems = {
  Price: 'Price List',
  Sim: '3D Simulations',
  Request: 'Request a Quote',
};

export default function PrintPage() {
  return (
    <div className={style['page-container']}>
      <BtnUpPage />
      <Aside navBar={menuItems} />
      <div className={style.gallery}>
        <h2>hello</h2>
      </div>
    </div>
  );
}
