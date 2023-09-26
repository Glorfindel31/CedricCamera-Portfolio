import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  try {
    // Initial query to get total_count
    const initialResult = await cloudinary.v2.search
      .expression('resource_type:image')
      .max_results(1) // Minimum value to get total_count
      .execute();

    const totalCount = initialResult.total_count;

    // Subsequent query to fetch all public IDs based on total_count
    const result = await cloudinary.v2.search
      .expression('resource_type:image') // Search for all images
      .max_results(3) // Using the total_count value here
      .execute();

    const data = result.resources;
    return new Response(JSON.stringify({data}), {
      headers: {'Content-Type': 'application/json'},
    });
  } catch (error) {
    console.error('Cloudinary API Error: ', error);
    return new Response(
      JSON.stringify({error: 'Failed to fetch images from Cloudinary'}),
      {
        status: 500,
        headers: {'Content-Type': 'application/json'},
      },
    );
  }
}
