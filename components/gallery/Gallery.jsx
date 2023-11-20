'use client';
import {useState, useEffect, useContext, useCallback} from 'react';
import {getData, shuffle} from '@/utils/gallery-data';
import {GalleryContext} from '../../utils/contextProviderGallery';
import CloudinaryImage from '../cloudinary-image';
import ImageModal from '../ui/imageModal';
import style from './gallery.module.css';

const BASE_IMAGE_URL = 'http://res.cloudinary.com/dduwp6ob6/image/upload/';
const DEFAULT_COLUMNS = 4;

export default function GalleryAll() {
  const [initialData, setInitialData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [screenHeight, setScreenHeight] = useState(null);
  const [screenWidth, setScreenWidth] = useState(null);
  const {selectedFilter} = useContext(GalleryContext);
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const [columnData, setColumnData] = useState([]);

  const chooseFolder = useCallback((array, string) => {
    return array.filter(data => data.folder === string);
  }, []);

  const fetchData = useCallback(async () => {
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
  }, [selectedFilter, chooseFolder]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!initialData || !initialData.data) {
      setColumnData([]);
      return;
    }

    // Create an array of empty arrays, one for each column
    const newColumnData = Array.from({length: numColumns}, () => []);

    // Distribute the images among the columns
    initialData.data.forEach((data, idx) => {
      const colIndex = idx % numColumns;
      newColumnData[colIndex].push(data);
    });

    setColumnData(newColumnData);
  }, [initialData, numColumns]);

  const handleImageClick = useCallback(imageData => {
    setCurrentImage(imageData);
    setShowModal(true);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1000) {
      setNumColumns(4);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 639) {
      setNumColumns(3);
    } else {
      setNumColumns(2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize immediately after component is mounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const getMaxHeight = useCallback(() => Math.floor(screenHeight * 2), [screenHeight]);
  const getMaxWidth = useCallback(
    () => Math.floor((screenWidth * 0.75) / 1.5),
    [screenWidth],
  );
  return (
    <main className={style.gallery}>
      {columnData.map((column, idx) => (
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
