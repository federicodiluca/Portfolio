// Navigation Bar SECTION
const navBar = {
  show: true,
};

const contactForm = {
  show: true,
  formspree_id: "moqrwnnr",
}

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6",
  firstName: "Federico",
  middleName: "",
  lastName: "Di Luca",
  messages: 
  [
    "Engineer",
    "Developer",
    "Travel, Nature and Animals Lover",
    "Passionate about 3D Printing",
    "Engineer",
  ],
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/federicodiluca",
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
  imageLink: require("../editable-stuff/profile-pic.png"),
  imageSize: 375,
  messages: [
    // "Electronic Engineer based in Pesaro, Italy",
    // "Currently focused on .NET Full Stack Development",
    "Passionate .NET Development Technical Leader, graduated with honors in Electronic and Telecommunications Engineering from the University of Bologna.",
    "Experienced in leading backend development for Marketing and E-commerce projects, I drive innovation and excellence within the R&D team.", 
    "Skilled in coding best practices and clean architecture principles, I thrive in dynamic teams and deliver high-quality, scalable solutions."
  ],
  // resume: "https://www.dropbox.com/s/3rnhc3j6o5oeats/CV%20Federico%20Di%20Luca%20%28AL%29.pdf?dl=0",
  resume: require("../editable-stuff/CV Federico Di Luca.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent 'for-fun' Projects",
  gitHubUsername: "federicodiluca", //i.e."johnDoe12Gh"
  reposLength: 0,
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
      img: require("../editable-stuff/profile-pic.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile-pic.png"), 
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
  heading: "Main Tools",
  hardSkills: [
    // { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt:"azure" },
    // { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt:"net" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", alt:"net-core" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt:"c#" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", alt:"visual-studio" },
    // { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt:"visualvs-code" },
    { url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt:"git" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", alt:"sql-server" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", alt:"my-sql" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt:"mongoDb" },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt:"javascript" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt:"typescript" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg", alt:"jquery" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt:"react" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", alt:"docker" },
    { url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", alt:"postman" },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", alt:"jupyter" },
    { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt:"python" },
  ],
  // softSkills: [
  //   { name: "Adaptability", value: 90 },
  //   { name: "Entrepreneurship", value: 85 },
  //   { name: "Problem Solving", value: 80 },
  //   { name: "Organization", value: 99 },
  //   { name: "Team work", value: 95 },
  //   { name: "Leadership", value: 90 },
  //   { name: "Ability of work under pressure", value: 90 },
  //   { name: "Attention to details", value: 85 },
  // ],
  imageSize: {
    width:"20",
    height:"20"
  },
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get in Touch",
  message: "Feel free to email me at",
  email: "federico.diluca95@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  footer: 'C\#, .NET Core, .NET Framework, Razor Pages, MVC, Web Api, Blazor, Javascript, Typescript, React, NextJs, Jquery, Bootstrap, Entity Framework, Hangfire, Postman, Swagger, Docker, Git, TFS, SqlServer, SSMS, IIS Server, MongoDB, MySql, WPF, XAML.',
  data: [
    {
      company: 'Websolute',
      role: 'Technical Leader',
      // companylogo: require('../assets/img/websolute_logo_200x100.png'),
      date: 'January 2024 – Present',
      },
      {
        company: 'Websolute',
        role: 'Backend Developer',
        // companylogo: require('../assets/img/websolute_logo_200x100.png'),
        date: 'May 2021 – December 2023',
    },
    {
      company: 'NGTEC',
      role: 'Automation Developer',
      // companylogo: require('../assets/img/ngtec_logo_200x100.png'),
      date: 'January 2020 – April 2021',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  //footer: '',
  data: [
    {
      title: 'Master\'s Degree',
      institute: 'University of Bologna',
      mark: '110 L / 110',
      subTitle: 'Electronic and Telecommunications Engineering',
      date: 'September 2017 - December 2019',
    },
    {
      title: 'Bachelor\'s Degree',
      institute: 'University of Bologna',
      mark: '109 / 110',
      subTitle: 'Biomedical Engineering',
      date: 'September 2014 - July 2017',
    },
    {
      title: 'Erasmus International Experience',
      institute: 'Universitat Polytècnica de Catalunya, Barcelona',
      date: 'September 2018 - February 2019',
    },
  ]
}

const articles = {
  show: true,
  heading: "Research Articles",
  data: [
    {
      title : "Human Being Detection from UWB NLOS Signals: Accuracy and Generality of Advanced Machine Learning Models",
      date : "February 2022",
      journal : "MDPI - Sensors",
      url : "https://www.mdpi.com/1507940",
      abstract : "This paper studies the problem of detecting human beings in non-line-of-sight (NLOS) conditions using an ultra-wideband radar. We perform an extensive measurement campaign in realistic environments, considering different body orientations, the obstacles’ materials, and radar–obstacle distances. We examine two main scenarios...",
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, contactForm, mainBody, about, repos, skills, leadership, getInTouch, experiences,education, articles };
