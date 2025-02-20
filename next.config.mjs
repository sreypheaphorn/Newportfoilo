/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.watchOptions = {
          ignored: /node_modules/,
          poll: 1000, // or higher (2000, 3000)
        };
        return config;
      },
};

export default nextConfig;
  