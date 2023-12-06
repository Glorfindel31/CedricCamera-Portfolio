import Aside from '../components/Aside';
import style from './page.module.css';
import Gallery from '../components/Gallery';
import {getData, shuffle} from '@/utils/gallery-data';

const menuItems = [
  {name: 'all', path: '/', filter: 'all'},
  {
    name: 'digital comercial',
    path: '/filtered/digital-comercial',
    filter: 'digital/comercial',
  },
  {name: 'digital others', path: '/filtered/digital-others', filter: 'digital/others'},
  {name: 'analog comercial', path: '/filtered/film-comercial', filter: 'film/comercial'},
  {name: 'analog others', path: '/filtered/film-others', filter: 'film/others'},
  {name: 'prints', path: '/prints'},
  {name: 'about', path: '/about'},
  {name: 'instagram', path: 'https://www.instagram.com/cedriccamera/', newTab: true},
  {name: 'contact', path: '/contact'},
];

export default async function Home() {
  const location = 'all';

  async function imageFiltered(location) {
    const data = await getData();
    if (location === 'all') {
      return shuffle(data.data);
    } else {
      return shuffle(data.data.filter(item => item.folder === location));
    }
  }

  const imageData = await imageFiltered(location);

  return (
    <main className={style.container}>
      <Aside navBar={menuItems} location={location} />
      <Gallery imageData={imageData} />
    </main>
  );
}
