import cloudinary from 'cloudinary';

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
    const result = await cloudinary.v2.api.resources({type: 'upload', max_results: 300});
    const data = result.resources;
    return createResponse({data});
  } catch (error) {
    throw new Error(`Failed to fetch images from Cloudinary: ${error.message}`);
  }
}
