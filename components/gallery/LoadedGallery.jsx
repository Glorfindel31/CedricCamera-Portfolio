import style from './Gallery.module.css';

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

export default LoadingGallery;
