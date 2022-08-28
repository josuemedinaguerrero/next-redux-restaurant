/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      // reactStrictMode: true,
      domains: ["res.cloudinary.com"],
   },
   swcMinify: true,
};

module.exports = nextConfig;
