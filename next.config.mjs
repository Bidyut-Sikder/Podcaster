/** @type {import('next').NextConfig} */
const nextConfig = {
  http: {
    enabled: true,
    // Additional HTTP configuration options if needed
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lovely-flamingo-139.convex.cloud',
          //  port: '',
           // pathname: '/account123/**',
          },
        ],
      }
};

export default nextConfig;
   