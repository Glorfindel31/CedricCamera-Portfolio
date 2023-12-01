'use client';
import {getPrintingData} from '@utils/gallery-data';
import {useState, useCallback, useEffect} from 'react';
import Aside from '@components/Aside';
import style from './page.module.css';
import BtnUpPage from '@components/ui/BtnUpPage';
import Card from '@components/ui/Card';

const menuItems = {
  Back: "/",
};

const DEFAULT_COLUMNS = 4;

export default function PrintPage() {
  const [initialData, setInitialData] = useState(null);
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const [columnData, setColumnData] = useState([]);

  const fetchData = useCallback(async () => {
    let response;

    const storedData = localStorage.getItem('printingData');

    if (storedData) {
      response = JSON.parse(storedData);
    } else {
      response = await getPrintingData();
      localStorage.setItem('printingData', JSON.stringify(response));
    }

    setInitialData(response);
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
    fetchData();
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fetchData, handleResize]);

  useEffect(() => {
    if (!initialData || !initialData.data) {
      setColumnData([]);
      return;
    }
    const newColumnData = Array.from({length: numColumns}, () => []);
    initialData.data.forEach((data, idx) => {
      const colIndex = idx % numColumns;
      newColumnData[colIndex].push(data);
    });

    setColumnData(newColumnData);
  }, [initialData, numColumns]);

  return (
    <main className={style['page-container']}>
      <Aside navBar={menuItems} />
      <div className={style['main-container']}>
        <div className={style.header}>
          <h5>Printing</h5>
          <p className={style.description}>
            Welcome in my shop, you will find a large choice of frame for the prints.
            Select your favorite in our catalog. Pick a frame and a size, and copy the
            link. Send us an emal with the link and we will send you a quote.
            <br />
            <span className={style.specials}>
              *Our deliveris are only available in Vietnam.
            </span>
          </p>
        </div>
        <div className={style.list}>
          {columnData.map((column, idx) => (
            <div key={idx} className={style['list-column']}>
              {column.map(data => (
                <Card
                  slug={data.asset_id}
                  key={data.asset_id}
                  src={`https://res.cloudinary.com/dduwp6ob6/image/upload/f_auto/q_auto/${data.public_id}`}
                  alt={data.filename}
                  title={data.filename}
                  description={data.caption}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <BtnUpPage />
    </main>
  );
}
