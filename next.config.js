// module.exports = {
//   reactStrictMode: true,
//   env: {
//     API_KEY: process.env.API_KEY,
//   },
//   images:{
//     domains:['i.ytimg.com','cdn-images-1.medium.com','upload.wikimedia.org']
//   }
// }
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  reactStrictMode: true,
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  images:{
    domains:['i.ytimg.com','cdn-images-1.medium.com','upload.wikimedia.org','media.sketchfab.com','i.insider.com','preview.redd.it']
  },
  pageExtensions: ["js", "jsx", "md", "mdx"]
});