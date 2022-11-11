// module.exports = {
//   reactStrictMode: true,
//   env: {
//     API_KEY: process.env.API_KEY,
//   },
//   images:{
//     domains:['i.ytimg.com','cdn-images-1.medium.com','upload.wikimedia.org']
//   }
// }
 
module.exports = ({
  reactStrictMode: true,
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'raw-loader' }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  images:{
    domains:['i.ytimg.com','cdn-images-1.medium.com','upload.wikimedia.org','media.sketchfab.com','i.insider.com','preview.redd.it']
  },
  pageExtensions: ["js", "jsx", "md", "mdx"]
});