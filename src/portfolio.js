/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Import images
import DhanalakshmiLogo from "./assets/images/DCE-logo.png";
import dotnetLogo from "./assets/images/dotnet.svg";
import dockerLogo from "./assets/images/docker.svg";
import tailwindLogo from "./assets/images/tailwindcss.svg";
import css3Logo from "./assets/images/css3.svg";
import html5Logo from "./assets/images/html5.svg";
import nodejsLogo from "./assets/images/nodejs.svg";
import reactLogo from "./assets/images/react.svg";
import javascriptLogo from "./assets/images/javascript.svg";
import postgresqlLogo from "./assets/images/postgresql.svg";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AJAY",
  title: "Hi, I'm AJAY",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with Reactjs / Nodejs / React Native and  libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ajayakilan/",
  linkedin: "https://www.linkedin.com/in/ajay-akilank01/",
  gmail: "ajayakilan01@gmail.com",
  instagram: "https://www.instagram.com/dean_ajay/",
  phone: "+91-8939008941",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end for web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications in SPA Stacks"),
    emoji(
      "⚡ Integration of third party services "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "custom-icon",
      customIcon: html5Logo
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "custom-icon",
      customIcon: css3Logo
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "custom-icon",
      customIcon: tailwindLogo
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "custom-icon",
      customIcon: javascriptLogo
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "custom-icon",
      customIcon: reactLogo
    },
    {
      skillName: "reactnative",
      fontAwesomeClassname: "custom-icon",
      customIcon: reactLogo
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "custom-icon",
      customIcon: nodejsLogo
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "custom-icon",
      customIcon: postgresqlLogo
    },
    
    {
      skillName: "dotnet",
      fontAwesomeClassname: "custom-icon",
      customIcon: dotnetLogo
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "custom-icon",
      customIcon: dockerLogo
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dhanalakshmi College of Engineering ",
      logo: DhanalakshmiLogo,
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2019 - June 2023",
      
    },
     
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};




// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Details ☎️"),
  subtitle:
    "Happy to discuss a project or just have a chat—my inbox is open.",
    // "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8939008941",
  email_address: "ajayakilan01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const myProjects = {
  title: "Projects",
  subtitle: "Things I've Built",
  display: true,
  projects: [
    {
      title: "GPS Vehicle Tracking System",
      description: "A GPS-based application for real-time location tracking and navigation.",
      category: "Industry Experience",
      details: {
        description: "This is a production-level GPS vehicle tracking and fleet management web application built using React and modern frontend technologies. The application provides real-time vehicle tracking, geofencing, fleet management, analytics dashboards, report generation, and secure share-tracking features.",
        role: "Fullstack Developer responsible for UI development and Backend, API integration, real-time tracking modules, geolocation features, and dashboard implementation.",
        technologies: "React, Vite, React Router, Tailwind CSS, Leaflet, React-Leaflet, Leaflet Draw, Recharts, Axios, React Toast, React Window.",
        features: "Real-time GPS tracking, geofencing, vehicle & driver management, analytics dashboards, Excel report generation, authentication with JWT, shareable tracking links, alerts and notifications."
      },
      link: ""
    },
    {
      title: "Used Electronics and Car Selling System",
      description: "Personal developer portfolio built with React and modern CSS animations.",
      category: "Academic Work",
      details: {
        description: "This is a full-stack marketplace web application designed for buying and selling used electronics and cars. The platform allows users to list products, browse available items, communicate with sellers, and manage listings through a secure and user-friendly dashboard.",
        role: "Full Stack Developer responsible for UI development, backend integration, database design, JWT authentication system, and complete CRUD functionality.",
        technologies: "React, JavaScript, Tailwind CSS, Express.js, REST APIs, JWT Authentication.",
        features: "User registration and login with secure authentication, product listing and management, search and filtering, image upload for products, seller dashboard, responsive UI, and complete CRUD operations for marketplace listings."
      },
      link: ""
    },
    {
      title: "Personal Health Trainer Habit To-Do App",
      description: "This is a health-focused productivity web application designed to help users build healthy habits",
      category: "Personal Project",
      details: {
        description: "A productivity and wellness app that helps users track daily workouts, habits, water intake, and health goals through an interactive to-do dashboard.",
        fullDescription: "Personal Health Trainer is a health-focused productivity web application designed to help users build healthy habits and manage daily fitness routines. The app combines a to-do planner + fitness tracker to improve consistency, discipline, and lifestyle management. The goal of this project was to build a clean, responsive, and user-friendly system that allows users to track daily health activities and stay accountable to their fitness goals.",
        technologies: "React, Vite, React Router, Tailwind CSS, Leaflet, React-Leaflet, Leaflet Draw, Recharts, Axios, React Toast, React Window."
      },
      link: ""
    }
  ]
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  myProjects
};
