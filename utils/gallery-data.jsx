import data from '../public/imageData';
import {taggedImages, imagesDetails} from '@app/prints/details';

export async function getData() {
  const result = await fetch('/searchapi', {
    next: {revalidate: 86400},
  });

  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}

export function getLocalData() {
  return data;
}

//shuffle function to display different images
export function shuffle(originalArray) {
  let array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function getPrintingData() {
  const result = await fetch('/searchapiTagged', {
    next: {revalidate: 86400},
  });
  if (!result.ok) {
    throw new Error(`Failed to fetch: ${result.status} ${result.statusText}`);
  }
  return result.json();
}

export function getLocalPrintingData() {
  const mergedData = taggedImages.data.map(item => {
    const detail = imagesDetails.find(detail => detail.public_id === item.public_id);
    return {...item, ...detail};
  });

  return {data: mergedData};
}
