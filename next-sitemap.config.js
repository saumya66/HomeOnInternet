let policy ={
  userAgent:"*"
}
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://saumyanayak.xyz',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
      policies :[
        policy
      ]
    },
    outDir: './out',
  } 