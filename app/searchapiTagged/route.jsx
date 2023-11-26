import cloudinary from 'cloudinary';
import {imagesDetails} from '../prints/details';

function validateEnvVars(vars) {
  vars.forEach(variable => {
    if (!process.env[variable]) {
      console.error(`Environment variable ${variable} not set`);
      process.exit(1);
    }
  });
}

validateEnvVars(['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET']);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {'Content-Type': 'application/json'},
  });
}

export async function GET() {
  try {
    const result = await cloudinary.v2.search
      .expression('resource_type:image AND tags=print')
      .max_results(300)
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

    return createResponse({data: dataWithDetails});
  } catch (error) {
    console.error('Cloudinary API Error: ', error);
    return createResponse(
      {error: `Failed to fetch images from Cloudinary: ${error.message}`},
      500,
    );
  }
}
