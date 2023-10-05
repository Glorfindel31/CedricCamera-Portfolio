'use client';
import {useState} from 'react';
import GalleryAll from '../components/gallery/GalleryAll';
import Aside from '../components/Aside';
import GalleryOther from '../components/gallery/GalleryOther';
import style from './Page.module.css';

import BtnUpPage from '../components/ui/btnUpPage';

export default function Home() {
  const [selectedGallery, setSelectedGallery] = useState('all');
  return (
    <div className={style['page-container']}>
      <BtnUpPage />
      {/* Left Sidebar */}
      <Aside selectedGallery={selectedGallery} setSelectedGallery={setSelectedGallery} />

      {/* Gallery */}
      <div className={style.gallery}>
        {selectedGallery === 'all' && <GalleryAll />}
        {selectedGallery === 'digiCo' && <GalleryOther filter={'digital/comercial'} />}
        {selectedGallery === 'digiOth' && <GalleryOther filter={'digital/others'} />}
        {selectedGallery === 'anaCo' && <GalleryOther filter={'film/comercial'} />}
        {selectedGallery === 'anaOth' && <GalleryOther filter={'film/others'} />}
      </div>
    </div>
  );
}
