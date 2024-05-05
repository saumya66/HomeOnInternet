    
const NavItems = [
    {
        id:1,
        link: "/projects",
        name: "projects",
    },
    {
        id:2,
        link: "/work",
        name: "work",
    },
    {
        id:3,
        link: "/videos",
        name: "videos",
    },
    {
        id:4,
        link: "/blogs",
        name: "blogs",
    },
    {
        id:5,
        link: "/reachme",
        name: "reachme",
    }
];

const PROJECTS = [
    {
        id: 1,
        name: "Sendecentralized",
        description: "Built my first full-stack decentralized app.",
        github: "https://github.com/saumya66/sendecentralized",
        live: "https://sendecentralized.on.fleek.co",
        thumbnail: "/sendecentralized.webp",
    },
    {
        id: 2,
        name: "Remote Hub 📱",
        description: "Find quality remote work, save jobs you love & of-course Apply!",
        github: "https://github.com/saumya66/RemoteJobsApp",
        live: "https://play.google.com/store/apps/details?id=com.futuredrivenapps.remotehub",
        thumbnail: "/remotehub.webp",
    },
    {
        id: 3,
        name: "HackrNews 📰",
        description: "I know you love reading HackerNews so why not read it with ease ! 🚀",
        github: "https://github.com/saumya66/hackr-news",
        live: "http://hackrnews.vercel.app/",
        thumbnail: "/hackrnews.webp",
    },
    {
        id: 4,
        name: "HashnodeHome-Clone x HarperDB 🧡",
        description: "A full React clone of Hashnode's Home feed getting feed data from HarperDB instance.",
        github: "https://github.com/saumya66/Hashnode-HarperDB-Hackathon",
        live: "https://hashnode-harper.herokuapp.com/",
        thumbnail: "/hashnodeclone.webp",
    },
    {
        id: 5,
        name: "Admin System 👩‍🎓",
        description: "A full stack MERN Webapp for a Admin to manage courses of students.",
        github: "https://github.com/saumya66/AdminSystem-MERN#readme",
        live: "https://mainteny-admin.netlify.app/",
        thumbnail: "/admin.webp",
    },
    {
        id: 6,
        name: "SongUp 🎧",
        description: "A full stack MERN Webapp with JWT Auth, Song Uploads, Songs Feed.",
        github: "https://github.com/saumya66/SongUp---Full-Stack#readme",
        live: "https://songup.netlify.app/",
        thumbnail: "/songup.webp",
    },
    {
        id: 7,
        name: "BitBuzz 💲",
        description: "Buzzes everytime Bitcoin price drops in Realtime. - Inspired from Silicon Valley.",
        github: "https://github.com/saumya66/BitBuzz-SiliconValley",
        live: "https://bitbuzz.netlify.app/",
        thumbnail: "/bitbuzz.webp",
    },
    {
        id: 8,
        name: "PeopleUAdmire 🙋‍♂️",
        description: "To create one place - Made by people, For People to Find Awesome People.",
        github: "https://github.com/saumya66/PeopleUAdmire-Full-Stack#readme",
        live: "https://github.com/saumya66/PeopleUAdmire-Full-Stack#readme",
        thumbnail: "/peopleuadmire.webp",
    }
]

const WORK = [
    {
        id: 4,
        name: "leap.club",
        role: "full stack engineer (react native/react heavy)",
        highlights: [
            "responsible for swiftly shipping multiple version releases and codepushes (over-the-air updates) to our entire userbase successfully on ios and google play stores.",
            "responsible for quickly building and deploying all the websites used by the company. integrated razorpay gateway to accept payments on our main site.",
            "implemented a feature on the app that allowed us to decide whether to send silent or pop-up codepush/over-the-air update to a user from our backend. silent codepush made our app updates non-intrusive to user experience.",
            "led and contributed to multiple major products/sprints on app side end-to-end, to ship some great products within tight timelines which ended up being loved by our users.",
            "saved almost 6-8 working days in a critical project by using codepush/over-the-air update (40 seconds) to push updates for our testing team, instead of traditionally building & exporting builds (40 mins) every time we make changes. this made us superfast by saving almost 2-3 hours each day!",
            "streamlined notification tracking on the app by simplifying complex legacy code.",
            "built clean ui and animations on interaction to enhance the user experience."
          ],
        tech: "",
        link: "https://leap.club",
        thumbnail: "/leap_logo.webp",
        period: "mar 2023 - present",
    },
    {
        id: 4,
        name: "anheuser-busch inbev",
        role: "digital solutions intern",
        highlights: ["studied the journey of product from production to customer and proposed solutions with potential of savings of approx. $1.5 Million.",],
        tech: "",
        link: "https://www.abinbev-india.com",
        thumbnail: "/abinbev_logo.webp",
        period: "aug 2022 - dec 2022",
    },
    {
        id: 3,
        name: "leap.club",
        role: "sde intern (react native)",
        highlights: [
            "worked and built core parts of the app like authentication flows and extensive global state management throughout app using redux toolkit query.",
            "contributed to various features used by thousands of women, by translating figma uis to clean react code and integrating numerous apis across the app.",
            "worked on a nextjs project to make a web version of the app too."
          ],
        tech: "",
        link: "https://leap.club",
        thumbnail: "/leap_logo.webp",
        period: "feb 2022 - july 2022",
    },
    {
        id: 2,
        name: "get breakout",
        role: "react engineer intern",
        highlights:[
            "worked on an extensive react code base, remotely at this startup, with a goal to automate tedious business processes.",
            "built critical features like payments integration with stripe and complex ui with drag, drop & connect functionalities of components.",
            "worked on lot of api integrations from backend."
          ]
          ,
        tech: "",
        link: "https://twitter.com/get_breakout",
        thumbnail: "/breakout_logo.webp",
        period: "oct 2021 - dec 2021",
    },
    {
        id: 1,
        name: "chabraine tech",
        role: "full-stack sde intern",
        highlights:[
            "built full stack web apps with extensive use of react, typescript & mongodb.",
            "used aws amplify to integrate authentication into the web app."
          ]
          ,
        tech: "",
        link: "",
        thumbnail: "/company_logo.webp",
        period: "apr 2021 - jul 2021"
    },
]


export {NavItems, PROJECTS, WORK}