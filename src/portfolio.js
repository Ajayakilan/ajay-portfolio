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
  resumeSection
};
