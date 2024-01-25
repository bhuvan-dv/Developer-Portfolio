import { meta, shopify, starbucks, tesla, idexcel, testyantra, chef } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    // {
    //     title: "Intern",
    //     company_name: "I-PEC Power Controlled Pvt Ltd",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Aug 2019 - Sept 2019",
    //     points: [
    //         `Sourced materials for L7 Drive, conducted Ather charging pod tests, and optimized shop floor operations.`,
    //     ],
    // },
    {
        title: "Trainee Software Engineer",
        company_name: "TESTYANTRA Software Solutions ",
        icon: testyantra,
        iconBg: "#fbc3bc",
        date: "Dec 2021 - May 2022",
        points: [
            `Implemented Context API and react-toastify messages for Auth and Movies module.`,
            `Implementing all Restful API functions and CRUD operations and server-side routing.`,
            `Creating Schema using mongoose middleware and validating Schema using joi middleware`,
            `Working on file uploads using Multer middleware for profiles`
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Idexcel Technologies Pvt Ltd ",
        icon: idexcel,
        iconBg: "#accbe1",
        date: "May 2022 - June 2023",
        points: [
            `Improved data retrieval effectiveness of the application’s search capacity for data across various microservices by 90% with the implementation of Elasticsearch via AWS OpenSearch and S3 bucket.`,
            `Utilized AWS Lambda and Redshift to successfully develop an audit log service while leveraging ReactJS to design the user interface. Increased usability and enabled tracking of application entries for data from many microservices from Redshift into the UI.`,
            `Increased data accuracy by 95% in response object and reduced response time by 80% upon implementing dynamic querying in service layer. On the UI layer, the Server-Side Row Model grid, ag-Grid, was also implemented.`,
            `Developed versatile UI common components with drag-and-drop, resizable, and minimizable capabilities, offering a unified solution.`,
            `Contributed to the development of the admin service by writing server-side code in Node.js and Express, utilizing the Sequelize ORM to efficiently manage data operations.`

        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/bhuvan-dv',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bhuvandv/',
    }
];

export const projects = [
    {
        iconUrl: chef,
        theme: 'btn-back-red',
        name: 'Chef2go',
        description: 'Chef2go is a dedicated online platform designed exclusively for students, serving as a convenient all-in-one solution for culinary needs.',
        link: 'https://github.com/bhuvan-dv/chef-2-go',
    },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];