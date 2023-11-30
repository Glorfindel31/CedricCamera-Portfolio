import {getLocalPrintingData} from '@utils/gallery-data';
import Image from 'next/image';
import style from '../[imageId]/page.module.css';
import {Suspense} from 'react';

function Showcase({params, selectedOptions, frameStyle, showcaseColor, matStyle}) {
  const {imageId} = params;
  const imageData = getLocalPrintingData().data.find(item => item.asset_id === imageId);

  return (
    <div
      id="showcase"
      className={style['showcase']}
      style={{backgroundColor: showcaseColor}}
    >
      <div
        id="frame"
        className={` ${
          style[
            `${
              selectedOptions.materiel === 'framed'
                ? `framed-${selectedOptions.frame.toLowerCase()}`
                : ''
            }`
          ]
        }`}
        style={frameStyle}
      >
        <div
          id="mat"
          className={selectedOptions.materiel === 'framed' ? style['frame-mat'] : ''}
          style={matStyle}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Image
              src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto/q_auto/${imageData.public_id}`}
              alt={imageData.filename}
              width={1000}
              height={1000}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
