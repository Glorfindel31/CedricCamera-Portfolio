'use client';
import {useState} from 'react';
import GalleryAll from '@/app/gallery/GalleryAll';
import GalleryDigiCo from '@/app/gallery/GalleryDigiCo';
import GalleryDigiOth from '@/app/gallery/GalleryDigiOth';
import GalleryAnaCo from '@/app/gallery/GalleryAnaCo';
import GalleryAnaOth from '@/app/gallery/GalleryAnaOth';
import Aside from '@/components/Aside';

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
