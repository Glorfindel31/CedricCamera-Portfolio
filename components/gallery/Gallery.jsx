'use client';
import {useState, useEffect, useContext} from 'react';
import {getData, shuffle} from '@/utils/gallery-data';
import {GalleryContext} from '../../utils/contextProviderGallery';
import CloudinaryImage from '../cloudinary-image';
import ImageModal from '../ui/imageModal';
import style from './gallery.module.css';

const BASE_IMAGE_URL = 'http://res.cloudinary.com/dduwp6ob6/image/upload/';

export default function GalleryAll() {
  const [initialData, setInitialData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [screenHeight, setScreenHeight] = useState(null);
  const [screenWidth, setScreenWidth] = useState(null);
  const {selectedGallery, selectedFilter} = useContext(GalleryContext);

  //function to filter the data
  function chooseFolder(array, string) {
    return array.filter(data => data.folder === string);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        setScreenHeight(window.screen.availHeight);
        setScreenWidth(window.screen.availWidth);
      }

      const data = await getData();
      let filteredData = selectedFilter
        ? chooseFolder(data.data, selectedFilter)
        : data.data;
      let shuffledData = shuffle(filteredData);
      data.data = shuffledData;
      setInitialData(data);
    };

    fetchData();
  }, [selectedFilter]);

  // This function will be called when an image is clicked
  const handleImageClick = imageData => {
    setCurrentImage(imageData);
    setShowModal(true);
  };

  const MAX_COLUMNs = 3;

  const getColumns = colIndex => {
    if (!initialData || !initialData.data) {
      return [];
    }
    return initialData.data.filter((data, idx) => idx % MAX_COLUMNs === colIndex);
  };

  const getMaxHeight = () => Math.floor(screenHeight * 2);
  const getMaxWidth = () => Math.floor((screenWidth * 0.75) / 1.5);

  return (
    <main className={style.gallery}>
      {[getColumns(0), getColumns(1), getColumns(2)].map((column, idx) => (
        <div key={idx} className={style['gallery--column']}>
          {column.map((data, index) => (
            <CloudinaryImage
              key={data.public_id + index}
              onClick={() => handleImageClick(data)}
              src={BASE_IMAGE_URL}
              alt={data.etag}
              asset={data.public_id}
              format={data.format}
              folder={data.folder}
              quality={'auto:best'}
              maxsize={getMaxWidth()}
              height={data.height}
              width={data.width}
              formatchange={'auto'}
            />
          ))}
        </div>
      ))}
      <ImageModal
        onClose={() => setShowModal(false)}
        show={showModal}
        src={BASE_IMAGE_URL}
        alt={currentImage.etag}
        asset={currentImage.public_id}
        format={currentImage.format}
        folder={currentImage.folder}
        quality={'auto:best'}
        maxsize={getMaxHeight()}
        height={currentImage.height}
        width={currentImage.width}
        formatchange={'auto'}
      />
    </main>
  );
}
