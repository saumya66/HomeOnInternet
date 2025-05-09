let policy ={
  userAgent:"*",
  allow: "/",
}
module.exports = {
    siteUrl: 'https://www.saumyaone.xyz',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
      policies :[
        policy
      ]
    },
    outDir: './public',
  } 