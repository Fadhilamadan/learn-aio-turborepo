/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'id-ID',
    localeDetection: false,
    locales: ['en-US', 'id-ID'],
  },
};

module.exports = nextConfig;
