import Gallery from '../components/gallery/Gallery';
import Aside from '../components/Aside';
import style from './page.module.css';
import BtnUpPage from '../components/ui/BtnUpPage';

const menuItems = [
  {name: 'all', path: '/'},
  {name: 'digital comercial', path: '/digital/comercial'},
  {name: 'digital others', path: '/digital/others'},
  {name: 'analog comercial', path: '/film/comercial'},
  {name: 'analog others', path: '/film/others'},
  {name: 'prints', path: '/prints'},
  {name: 'about', path: '/about'},
  {name: 'instagram', path: '/instagram'},
  {name: 'contact', path: '/contact'},
];

export default function Home() {
  return (
    <main className={style['page-container']}>
      <Aside navBar={menuItems} />
      <div className={style.gallery}>{/* <Gallery /> */}</div>
    </main>
  );
}
