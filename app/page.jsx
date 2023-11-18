'use client';
import {GalleryProvider} from '../utils/contextProviderGallery';
import Gallery from '../components/gallery/gallery';
import Aside from '../components/aside';
import style from './page.module.css';
import BtnUpPage from '../components/ui/btnUpPage';

const menuItems = {
  all: 'all',
  digiCo: 'digital/comercial',
  digiOth: 'digital/others',
  anaCo: 'film/comercial',
  anaOth: 'film/others',
};

export default function Home() {
  return (
    <GalleryProvider>
      <div className={style['page-container']}>
        <BtnUpPage />
        <Aside navBar={menuItems} />
        <div className={style.gallery}>
          <Gallery />
        </div>
      </div>
    </GalleryProvider>
  );
}
