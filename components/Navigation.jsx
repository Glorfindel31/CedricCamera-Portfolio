import Link from 'next/link';
import {Button, buttonVariants} from '../components/ui/button';
import style from './Navigation.module.css';

export default function Navigation({menuHeight, handleOpenModal, setSelectedGallery}) {
  return (
    <nav
      style={{
        height: menuHeight,
        transition: 'height 1s cubic-bezier(0.24, 0.06, 0.05, 0.95)',
      }}
      className={style.navigation}
    >
      <hr></hr>{' '}
      <ul className="pl-2">
        <li>
          <Button variant="ghost" onClick={() => setSelectedGallery('all')}>
            All Images
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => setSelectedGallery('digiCo')}>
            Digital/Commercial
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => setSelectedGallery('digiOth')}>
            Digital/Other
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => setSelectedGallery('anaCo')}>
            Analogue/Commercial
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => setSelectedGallery('anaOth')}>
            Analogue/Other
          </Button>
        </li>
        <li>
          <Link
            className={buttonVariants({variant: 'ghost'})}
            href="https://www.instagram.com/cedriccamera/"
            target="_blank"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Button variant="ghost" onClick={handleOpenModal}>
            Infos
          </Button>
        </li>
      </ul>
    </nav>
  );
}
