/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/digitalCV",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
