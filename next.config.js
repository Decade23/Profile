/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  images: {
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
      },
      {
        protocol: "https",
        hostname: "dedi.asia",
        pathname: "/assets/images/**",
      },
    ],
  },
  async headers() {
    // Security headers for static assets (middleware handles dynamic routes)
    const staticSecurityHeaders = [
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
    ];

    return [
      {
        source: "/_next/static/:path*",
        headers: staticSecurityHeaders,
      },
      {
        source: "/assets/:path*",
        headers: staticSecurityHeaders,
      },
      {
        source: "/privacy",
        headers: [
          ...staticSecurityHeaders,
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
