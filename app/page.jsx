'use client';
import {useState} from 'react';
import Gallery from '../components/gallery/Gallery';
import Aside from '../components/Aside';
import style from './Page.module.css';
import BtnUpPage from '../components/ui/btnUpPage';

const galleryFilters = {
  all: null,
  digiCo: 'digital/comercial',
  digiOth: 'digital/others',
  anaCo: 'film/comercial',
  anaOth: 'film/others',
};

export default function Home() {
  const [selectedGallery, setSelectedGallery] = useState('all');
  return (
    <div className={style['page-container']}>
      <BtnUpPage />
      <Aside selectedGallery={selectedGallery} setSelectedGallery={setSelectedGallery} />
      <div className={style.gallery}>
        <Gallery filter={galleryFilters[selectedGallery]} />
      </div>
    </div>
  );
}
