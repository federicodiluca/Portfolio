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
  messages: [
    "Electronic Engineer based in Pesaro, Italy",
    "Currently focused on .NET Full Stack Development",
  ],
  resume: "https://www.dropbox.com/s/3rnhc3j6o5oeats/CV%20Federico%20Di%20Luca%20%28AL%29.pdf?dl=0",
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
    { name: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white", value: 96, isImage: true },
    { name: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white", value: 92, isImage: true },
    { name: "https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white", value: 90, isImage: true },
    // { name: "https://img.shields.io/badge/VS-%231877F2.svg?style=for-the-badge&logo=visual-studio&logoColor=white", value: 90, isImage: true },
    { name: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E", value: 78, isImage: true },
    { name: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", value: 92, isImage: true },
    { name: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", value: 82, isImage: true },
  ],
  secondarySkills: [
    { name: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white", value: 80, isImage: true },
    { name: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white", value: 65, isImage: true },
    { name: "https://img.shields.io/badge/WPF-5C2D91?style=for-the-badge&logo=.net&logoColor=white", value: 95, isImage: true },
    { name: "https://img.shields.io/badge/Xamarin-3498DB?style=for-the-badge&logo=xamarin&logoColor=white", value: 60, isImage: true },
    { name: "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white", value: 68, isImage: true },
    { name: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white", value: 62, isImage: true },
    { name: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white", value: 90, isImage: true },
    { name: "https://img.shields.io/badge/MatLab-CC2927?style=for-the-badge&logoColor=white", value: 80, isImage: true },
    { name: "https://img.shields.io/badge/LabVIEW-FFDB00?style=for-the-badge&logo=LabVIEW&logoColor=black", value: 75, isImage: true },
    { name: "https://img.shields.io/badge/LaTeX-008080.svg?style=for-the-badge&logo=LaTex", value: 78, isImage: true }
  ],
  softSkills: [
    { name: "Adaptability", value: 90 },
    { name: "Entrepreneurship", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Organization", value: 99 },
    { name: "Team work", value: 95 },
    { name: "Leadership", value: 90 },
    { name: "Ability of work under pressure", value: 90 },
    { name: "Attention to details", value: 85 },
  ],
  imageSize: {
    width:"20",
    height:"20"
  },
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
