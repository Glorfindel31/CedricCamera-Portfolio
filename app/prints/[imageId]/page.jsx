'use client';
import {useEffect, useState} from 'react';

import style from './page.module.css';
import Header from '../printsComponents/Header';
import Showcase from '../printsComponents/Showcase';
import Options from '../printsComponents/Options';

export default function Shop({params}) {
  const [frameStyle, setFrameStyle] = useState({});
  const [windowSize, setWindowSize] = useState(null); // [width, height
  const [matStyle, setMatStyle] = useState({});
  const [showcaseColor, setShowcaseColor] = useState('#ffffff');
  const [selectedOptions, setSelectedOptions] = useState({
    materiel: 'canvas',
    size: '20',
    frame: 'Black',
    price: 500000,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (selectedOptions.materiel === 'framed') {
      setFrameStyle({
        width: windowSize < 680 ? '80vw' : '34vw',
        borderWidth:
          windowSize < 680
            ? `calc((80vw * 2) / ${selectedOptions.size})`
            : `calc((34vw * 2) / ${selectedOptions.size})`,
      });
      setMatStyle({
        padding:
          windowSize < 680
            ? `calc((80vw * 2) / ${selectedOptions.size})`
            : `calc((34vw * 2) / ${selectedOptions.size})`,
      });
    } else {
      setFrameStyle({width: windowSize < 680 ? '50vw' : '34vw'});
      setMatStyle({});
    }
  }, [selectedOptions.materiel, selectedOptions.size, windowSize]);

  return (
    <main className={style.container}>
      <div className={style['shop-frame']}>
        <Header />
        <div className={style.content}>
          <Showcase
            params={params}
            selectedOptions={selectedOptions}
            frameStyle={frameStyle}
            showcaseColor={showcaseColor}
            matStyle={matStyle}
          />
          <Options
            selectedOptions={selectedOptions}
            showcaseColor={showcaseColor}
            setShowcaseColor={setShowcaseColor}
            setSelectedOptions={setSelectedOptions}
            params={params}
          />
        </div>
      </div>
    </main>
  );
}
