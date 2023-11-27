import CloudinaryImage from '../Cloudinary-imageT';
import style from './Gallery.module.css';

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
        />
      ))}
    </div>
  ));
};

export default LoadedGallery;
