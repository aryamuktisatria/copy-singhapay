import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://*.google.com https://*.gstatic.com https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "frame-src 'self' https://*.google.com https://maps.google.com https://www.google.com",
              "connect-src 'self' https://*.google.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "child-src 'self' https://*.google.com"
            ].join("; ")
          },
        ],
      },
    ];
  },
};

export default nextConfig;