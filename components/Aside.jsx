'use client';
import React, {useState} from 'react';
import InfosModal from '../components/ui/infosModal';
import Link from 'next/link';
import {Button, buttonVariants} from '../components/ui/button';

export default function Aside({selectedGallery, setSelectedGallery}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <aside className="fixed top-0 left-0 flex flex-col w-[20%] p-8 h-screen">
      <div className="mb-8">
        <h1 className="text-2xl mb-4">
          Cedric <span className="font-bold">Florentin</span>
        </h1>
      </div>
      <nav>
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
      <footer className="mt-auto bg-white p-4">
        <small className=" text-xs">Copyright 2023 Cedric Florentin</small>
      </footer>
      <InfosModal show={showModal} onClose={handleCloseModal} />
    </aside>
  );
}
