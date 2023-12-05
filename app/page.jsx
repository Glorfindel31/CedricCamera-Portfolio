import Aside from '../components/Aside';
import style from './page.module.css';
import GalleryColumn from '../components/GalleryColumn';
import {getData, shuffle} from '@/utils/gallery-data';

const menuItems = [
  {name: 'all', path: '/'},
  {name: 'digital comercial', path: '/digital/comercial'},
  {name: 'digital others', path: '/digital/others'},
  {name: 'analog comercial', path: '/film/comercial'},
  {name: 'analog others', path: '/film/others'},
  {name: 'prints', path: '/prints'},
  {name: 'about', path: '/about'},
  {name: 'instagram', path: 'https://www.instagram.com/cedriccamera/', newTab: true},
  {name: 'contact', path: '/contact'},
];

const location = 'all';

export default async function Home() {
  async function imageFiltered(location) {
    const data = await getData();
    if (location === 'all') {
      return data;
    } else {
      return shuffle(data.filter(item => item.folder === location));
    }
  }

  const imageData = await imageFiltered(location);

  return (
    <main className={style.container}>
      <Aside navBar={menuItems} location={location} />
      <GalleryColumn location={location} imageData={imageData} />
    </main>
  );
}
