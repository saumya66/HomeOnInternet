let policy ={
  userAgent:"*",
  allow: "/",
}
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.saumyanayak.xyz',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
      policies :[
        policy
      ]
    },
    outDir: './out',
  } 