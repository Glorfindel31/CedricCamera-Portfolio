'use client';
import {useState, useEffect} from 'react';
import {getData, shuffle} from '@/utils/gallery-data';
import CloudinaryImage from '@/components/Cloudinary-image';
import ImageModal from '@/components/ui/imageModal';

export default function GalleryOther({filter}) {
  const [initialData, setInitialData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  //function to filter the data
  function chooseFolder(array, string) {
    return array.filter(data => data.folder === string);
  }

  //data modification
  useEffect(() => {
    getData().then(data => {
      let filteredData = chooseFolder(data.data, filter);
      let shuffledData = shuffle(filteredData);
      data.data = shuffledData;
      setInitialData(data);
    });
  }, [filter]);

  const handleImageClick = imageData => {
    setCurrentImage(imageData);
    setShowModal(true);
  };

  const MAX_COLUMNs = 3;

  function getColumns(colIndex) {
    if (!initialData || !initialData.data) {
      return [];
    }
    return initialData.data.filter((data, idx) => idx % MAX_COLUMNs === colIndex);
  }
  return (
    <main className="ml-[20%] grid grid-cols-3 gap-2 p-4 pr-10">
      {[getColumns(0), getColumns(1), getColumns(2)].map((column, idx) => (
        <div key={idx} className="flex flex-col space-y-2">
          {column.map((data, index) => (
            <CloudinaryImage
              onClick={() => handleImageClick(data)}
              key={data.public_id}
              src={data.public_id}
              height={data.height}
              width={data.width}
              alt={data.public_id}
              format={'webp'}
              folder={data.folder}
            />
          ))}
        </div>
      ))}
      <ImageModal
        show={showModal}
        src={currentImage.public_id}
        onClose={() => setShowModal(false)}
        alt={currentImage.public_id}
        format={'webp'}
        height={currentImage.height}
        width={currentImage.width}
      />
    </main>
  );
}
