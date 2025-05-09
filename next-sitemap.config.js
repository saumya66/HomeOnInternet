let policy ={
  userAgent:"*",
  allow: "/",
}
module.exports = {
    siteUrl: 'https://www.saumyaone.xyz',
    generateIndexSitemap: false, //FIX THIS: This is not resulting in a single sitemap
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
      policies :[
        policy
      ]
    },
    outDir: './public',
  } 