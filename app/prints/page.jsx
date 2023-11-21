'use client';
import {getPrintingData} from '../../utils/gallery-data';
import {useState, useCallback, useEffect} from 'react';
import Aside from '../../components/aside';
import style from './Page.module.css';
import BtnUpPage from '../../components/ui/btnUpPage';
import Card from '../../components/ui/card';

const menuItems = {
  Price: 'Price List',
  Request: 'Request a Quote',
};

const DEFAULT_COLUMNS = 4;

export default function PrintPage() {
  const [initialData, setInitialData] = useState(null);
  const [numColumns, setNumColumns] = useState(DEFAULT_COLUMNS);
  const [columnData, setColumnData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getPrintingData();
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
      <BtnUpPage />
      <Aside navBar={menuItems} />
      <div className={style['main-container']}>
        <div className={style.header}>
          <h4 className={style.title}>Printing</h4>
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
                  key={data.public_id}
                  src={data.secure_url}
                  alt={data.filename}
                  title={data.filename}
                  description={data.filename}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
