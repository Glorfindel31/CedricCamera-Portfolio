'use client';
// Import necessary hooks and utilities
import {useState, useEffect, useContext, useCallback} from 'react';
import {getLocalData, shuffle} from '@/utils/gallery-data';
import {GalleryContext} from '../../utils/contextProviderGallery';
import CloudinaryImage from '../Cloudinary-imageT';
import ImageModal from '../ui/imageModalT';
import style from './Gallery.module.css';

// Constants
const BASE_IMAGE_URL = 'https://res.cloudinary.com/dduwp6ob6/image/upload/';
const DEFAULT_COLUMNS = 4;

export default function GalleryAll() {
  // State variables
  const [galleryData, setGalleryData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [screenHeight, setScreenHeight] = useState(null);
  const [screenWidth, setScreenWidth] = useState(null);
  const {selectedFilter} = useContext(GalleryContext);
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const [columnData, setColumnData] = useState([]);

  // Function to filter data based on folder
  const chooseFolder = useCallback((array, string) => {
    return array.filter(data => data.folder === string);
  }, []);

  // Function to fetch data
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    // Set screen dimensions
    if (typeof window !== 'undefined') {
      setScreenHeight(window.screen.availHeight);
      setScreenWidth(window.screen.availWidth);
    }

    let data = originalData ? {data: originalData} : getLocalData();
    if (!originalData) setOriginalData(data.data);

    let filteredData = selectedFilter
      ? [...chooseFolder(data.data, selectedFilter)] // Always filter from the original data
      : [...data.data]; // Use the original data when resetting
    let shuffledData = shuffle(filteredData);
    setGalleryData({data: shuffledData}); // Ensure galleryData always has a 'data' property
    setIsLoading(false);
  }, [selectedFilter, chooseFolder, originalData]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData, selectedFilter]);

  // Distribute images among columns
  useEffect(() => {
    if (!galleryData || !galleryData.data) return setColumnData([]);

    const newColumnData = Array.from({length: numColumns}, () => []);

    galleryData.data.forEach((data, idx) => {
      const colIndex = idx % numColumns;
      newColumnData[colIndex].push(data);
    });

    setColumnData(newColumnData);
  }, [galleryData, numColumns]);

  // Function to handle image click
  const handleImageClick = useCallback(imageData => {
    setCurrentImage(imageData);
    setShowModal(true);
  }, []);

  // Function to handle screen resize
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1000) {
      setNumColumns(4);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 639) {
      setNumColumns(3);
    } else {
      setNumColumns(2);
    }
  }, []);

  // Handle screen resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize immediately after component is mounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Functions to get max height and width
  const getMaxHeight = useCallback(() => Math.floor(screenHeight * 2), [screenHeight]);
  const getMaxWidth = useCallback(
    () => Math.floor((screenWidth * 0.75) / 1.5),
    [screenWidth],
  );

  const LoadingGallery = ({numColumns}) =>
    Array.from({length: numColumns}).map((_, colIdx) => (
      <div key={colIdx} className={style['gallery--column']}>
        {Array.from({length: 4}).map((_, divIdx) => {
          const idx = colIdx * 10 + divIdx;
          return (
            <div key={idx} className={style['load-wraper']}>
              <div className={style.activity} style={{'--i': idx}}></div>
            </div>
          );
        })}
      </div>
    ));

  const LoadedGallery = ({columnData}) => {
    if (!columnData) return null;
    return columnData.map((column, idx) => (
      <div key={idx} className={style['gallery--column']}>
        {column.map((data, index) => (
          <CloudinaryImage
            key={data.public_id + index}
            onClick={() => handleImageClick(data)}
            src={BASE_IMAGE_URL}
            alt={data.etag}
            asset={data.public_id}
            folder={data.folder}
            quality={'auto'}
            formatchange={'auto'}
            maxsize={getMaxWidth()}
            height={data.height}
            width={data.width}
            loading={index < 10 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    ));
  };
  // In your render method
  return (
    <main className={style.gallery}>
      {isLoading ? (
        <LoadingGallery numColumns={numColumns} />
      ) : (
        <LoadedGallery columnData={columnData} />
      )}
      <ImageModal
        onClose={() => setShowModal(false)}
        show={showModal}
        src={BASE_IMAGE_URL}
        alt={currentImage.etag}
        asset={currentImage.public_id}
        folder={currentImage.folder}
        quality={'auto'}
        maxsize={getMaxHeight()}
        height={currentImage.height}
        width={currentImage.width}
        formatchange={'auto'}
      />
    </main>
  );
}
