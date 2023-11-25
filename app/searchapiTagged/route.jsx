import cloudinary from 'cloudinary';
import {imagesDetails} from '../prints/details';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Environment variables not set');
  process.exit(1);
}

cloudinary.v2.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {'Content-Type': 'application/json'},
  });
}

export async function GET() {
  try {
    const initialResult = await cloudinary.v2.search
      .expression('resource_type:image AND tags=print')
      .max_results(1)
      .execute();

    const totalCount = initialResult.total_count;

    const result = await cloudinary.v2.search
      .expression('resource_type:image AND tags=print')
      .max_results(totalCount)
      .execute();

    const data = result.resources;

    let matchCount = 0;
    let dataWithDetails = data.map(item => {
      const match = imagesDetails.find(detail => detail.public_id === item.public_id);
      if (match) {
        matchCount++;
        return {...item, ...match};
      }
      return item;
    });

    console.log(`Total items in details: ${imagesDetails.length}`);
    console.log(`Total items with data: ${data.length}`);
    console.log(`Total matched items: ${matchCount}`);

    return createResponse({data: dataWithDetails});
  } catch (error) {
    console.error('Cloudinary API Error: ', error);
    return createResponse(
      {error: `Failed to fetch images from Cloudinary: ${error.message}`},
      500,
    );
  }
}
