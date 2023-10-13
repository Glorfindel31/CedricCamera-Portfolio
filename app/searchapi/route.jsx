import cloudinary from 'cloudinary';

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

const searchExpression = 'resource_type:image';

function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {'Content-Type': 'application/json'},
  });
}

export async function GET(request) {
  try {
    const initialResult = await cloudinary.v2.search
      .expression(searchExpression)
      .max_results(1)
      .execute();

    const totalCount = initialResult.total_count;

    const result = await cloudinary.v2.search
      .expression(searchExpression)
      .max_results(totalCount)
      .execute();

    const data = result.resources;
    return createResponse({data});
  } catch (error) {
    console.error('Cloudinary API Error: ', error);
    return createResponse(
      {error: `Failed to fetch images from Cloudinary: ${error.message}`},
      500,
    );
  }
}
