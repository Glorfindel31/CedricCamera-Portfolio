'use client';
import React, {useState} from 'react';

export const GalleryContext = React.createContext({
  selectedGallery: null,
  setSelectedGallery: () => {},
});

const galleryFilters = {
  all: null,
  digiCo: 'digital/comercial',
  digiOth: 'digital/others',
  anaCo: 'film/comercial',
  anaOth: 'film/others',
};

export const GalleryProvider = ({children}) => {
  const [selectedGallery, setSelectedGallery] = useState('all');

  const selectedFilter = galleryFilters[selectedGallery];

  return (
    <GalleryContext.Provider
      value={{selectedGallery, setSelectedGallery, selectedFilter}}
    >
      {children}
    </GalleryContext.Provider>
  );
};
