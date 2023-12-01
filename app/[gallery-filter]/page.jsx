import {GalleryProvider} from '../utils/contextProviderGallery';
import Gallery from '@components/gallery/Gallery';
import Aside from '@components/Aside';
import style from '../page.module.css';
import BtnUpPage from '@components/ui/BtnUpPage';

const menuItems = {
  all: 'all',
  digiCo: 'digital/comercial',
  digiOth: 'digital/others',
  anaCo: 'film/comercial',
  anaOth: 'film/others',
};

const Page = ({}) => {
  return (
    <GalleryProvider>
      <div className={style['page-container']}>
        <Aside navBar={menuItems} />
        <div className={style.gallery}>
          <Gallery />
        </div>
      </div>
      <BtnUpPage />
    </GalleryProvider>
  );
};

export default Page;
