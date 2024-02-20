/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAP_API_KEY: process.env.NEXT_PUBLIC_MAPPLS_MAP_API,
        // Add other environment variables as needed
      },
};

export default nextConfig;
