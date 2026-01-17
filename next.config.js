/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
      },
      {
        protocol: 'https',
        hostname: 'dedi.asia',
        pathname: '/assets/images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/privacy",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
    ];
  },
};

module.exports = nextConfig;

