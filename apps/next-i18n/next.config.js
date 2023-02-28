/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'id',
    localeDetection: false,
    locales: ['en', 'id'],
  },
};

module.exports = nextConfig;
