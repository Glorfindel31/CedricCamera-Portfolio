'use client';
import {getPrintingData} from '@utils/gallery-data';
import {useCallback, useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Shop({params}) {
  const {imageId} = params;
  const [imageData, setImageData] = useState(null);

  const fetchData = useCallback(async () => {
    let response;

    const storedData = localStorage.getItem('printingData');

    if (storedData) {
      response = JSON.parse(storedData);
    } else {
      response = await getPrintingData();
      localStorage.setItem('printingData', JSON.stringify(response));
    }

    const matchingData = response.data.find(item => item.asset_id === imageId);
    setImageData(matchingData);
  }, [imageId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Link href="/prints">Back to Prints</Link>
      <h3>Shop</h3>
      {imageData ? (
        <>
          <h5>{imageData.public_id}</h5>
          <Image
            src={imageData.secure_url}
            alt={imageData.filename}
            width={300}
            height={300}
          />
        </>
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}
