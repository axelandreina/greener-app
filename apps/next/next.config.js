/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  images: {
    domains: ['assets.coingecko.com'],
  },
  externals: {
    react: 'React',
  },
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app',
  'react-native-web',
  'react-native-svg',
  'native-base',
  'react-native-svg',
])

module.exports = withPlugins(
  [
    withTM,
    [withExpo, { projectRoot: __dirname }],
    [withFonts, { projectRoot: __dirname }],
  ],
  nextConfig
)
