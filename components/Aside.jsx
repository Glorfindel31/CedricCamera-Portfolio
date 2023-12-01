import Footer from './Footer';
import Navigation from './Navigation';
import style from './Aside.module.css';

// The Aside component
export default function Aside({navBar}) {
  return (
    <aside className={style.aside}>
      <Navigation navBar={navBar} />
      <Footer />
    </aside>
  );
}
