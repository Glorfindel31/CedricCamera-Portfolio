'use client';
import GalleryAll from '@/components/GalleryAll';
import Aside from '@/components/Aside';

export default function Home() {
  return (
    <div className="flex bg-white h-screen w-screen">
      {/* Left Sidebar */}
      <Aside />
      {/* Gallery */}
      <GalleryAll />
    </div>
  );
}
