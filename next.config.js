const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    backendUrl: process.env.REACT_APP_API_BASE_URL,
  },
}

module.exports = nextConfig
