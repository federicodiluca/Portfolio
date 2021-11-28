// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6",
  firstName: "Federico",
  middleName: "",
  lastName: "Di Luca",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/FeDL95",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/federico.s.diluca/",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/federicodiluca/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/federico-di-luca-ing/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/FeDL95.jpg"),
  imageSize: 375,
  message:
    " .NET Developer and Electronic Engineer based in Italy, currently focused on Full Stack Web Development", //. New technologies and best practices enthusiast.",
    resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent 'for-fun' Projects",
  gitHubUsername: "FeDL95", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/FeDL95.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/FeDL95.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 95 },
    { name: "SQL (Sql Server)", value: 85 },
    { name: "JavaScript", value: 70 },
    { name: "HTML/CSS", value: 70 },
    { name: "Python", value: 70 },
    { name: "PHP", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 85 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Feel free to email me at",
  email: "federico.diluca95@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: '.NET Web Developer',
      companylogo: require('../assets/img/Websolute_Logo.png'),
      date: 'May 2021 – Present',
    },
    {
      role: '.NET Automation Engineer',// Here Add Company Name
      companylogo: require('../assets/img/NGTEC_Logo.png'),
      date: 'January 2020 – April 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
