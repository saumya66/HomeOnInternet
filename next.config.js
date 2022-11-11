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
  accordion: ["../src/**/*.accordion.@(j|t)sx"],
  addons: [  "@chakra-ui/accordion"],
  framework: "@accordion/react",
  features: {
    emotionAlias: false
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });

    return config;
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
  images:{
    domains:['i.ytimg.com','cdn-images-1.medium.com','upload.wikimedia.org','media.sketchfab.com','i.insider.com','preview.redd.it']
  },
  pageExtensions: ["js", "jsx", "md", "mdx"]
});