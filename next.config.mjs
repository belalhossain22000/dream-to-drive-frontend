/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",                // Local development (if applicable)
      "flagcdn.com",
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "hips.hearstapps.com",   
      'res.cloudinary.com',   // Ensure this domain is included
    ],
  },
};

export default nextConfig;
