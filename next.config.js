const dotenvExpand = require("dotenv-expand");

dotenvExpand.expand({ parsed: { ...process.env } });

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
