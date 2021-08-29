require("dotenv").config();
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/location/[city].js': { page: '/post', query: { title: '[city].js' } },
  //   }
  // },

}
