// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
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

export default withPlaiceholder(nextConfig);
