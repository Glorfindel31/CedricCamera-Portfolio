'use client';
import {useState} from 'react';
import GalleryAll from '../components/gallery/GalleryAll';
import GalleryDigiCo from '../components/gallery/GalleryDigiCo';
import GalleryDigiOth from '../components/gallery/GalleryDigiOth';
import GalleryAnaCo from '../components/gallery/GalleryAnaCo';
import GalleryAnaOth from '../components/gallery/GalleryAnaOth';
import Aside from '../components/Aside';

export default function Home() {
  const [selectedGallery, setSelectedGallery] = useState('all');

  return (
    <div className="flex bg-white h-screen w-screen">
      {/* Left Sidebar */}
      <Aside
        selectedGallery={selectedGallery}
        setSelectedGallery={setSelectedGallery}
      />
      {/* Gallery */}

      {selectedGallery === 'all' && <GalleryAll />}
      {selectedGallery === 'digiCo' && <GalleryDigiCo />}
      {selectedGallery === 'digiOth' && <GalleryDigiOth />}
      {selectedGallery === 'anaCo' && <GalleryAnaCo />}
      {selectedGallery === 'anaOth' && <GalleryAnaOth />}
    </div>
  );
}
