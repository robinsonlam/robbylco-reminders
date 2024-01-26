/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: 'reminders',
    //     filename: 'static/chunks/remoteEntry.js',
    //     exposes: {
    //       './reminders': './app/page.tsx'
    //     }
    //   }),
    // );

    return config;
  },
};