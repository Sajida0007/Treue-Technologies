import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-End web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coding Instructor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "True Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug-2023",
      points: [
        "Developing and maintaining web applications using Twilwind and other related technologies.",
        "Collaborating with other Team members submitting projects before deadline.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Counselor",
      company_name: "Narayana E Techno School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - July 2022",
      points: [
        "worked as a couselor with Narayana Group for a year generated leads for admission providing right guidence to parents.",
        "Hounoured by Narayana Group as a Best Couselor of The School",
        "Managed good relationsip between Parents and School Staff Include with Marketing",
      ],
    },
    {
      title: "Global Computer Instructor",
      company_name: "Superprof",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2018 - Present",
      points: [
        "Working as a Global Computer Instructor Since 2018 ",
        "Teaching various Subjects such as Html, CSS, JS,Python,ML backend development etc.",
        "I am working as a Part-Time Tutor here I have 5+ years of expereince in Teaching",
        
      ],
    },
    {
      title: "Tech Support Executive",
      company_name: "Gaon Tek Inc",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Providing Guidence and Technical Help to Customers.",
        "Learned about the Softwares and then Guide the Customers How to Use? also Providing How to Manage the software's they are purchasing.",
        "Checking the Functionality of the Softwares they are working well or not ",
        "This Job was from Different Domain but I was learn alot ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sajida Mam proved me wrong.",
      name: "Sara Lee",
      designation: "web developer intern",
      company: "Wipro",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Teacher who truly cares about their Students' success like Sajida mam does.",
      name: "Ashraf",
      designation: "Junior Developer",
      company: "Tata Corporation",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Meetin with Sajida Mam I created website, My knowledge and motivation is now 100%. I can't thank them enough!",
      name: "Lisa Wang",
      designation: "Front-End Developer",
      company: "Google operation",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Blog-Website",
      description:
        "I was created a Blog website as a Freelancer Using Wix/ and Wordpress for my client you can visit the website www.wildrose-mangoliya.com",
      tags: [
        {
          name: "Wix",
          color: "blue-text-gradient",
        },
        {
          name: "Honstinger",
          color: "green-text-gradient",
        },
        {
          name: "Wordpress",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Sajida0007",
    },
    {
      name: "Portfolio",
      description:
        "I created this Portfolio website Using three.js I used Tailwind css here.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Emailjs",
          color: "green-text-gradient",
        },
        {
          name: "Tawilwind css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Sajida0007",
    },
    {
      name: "Recipe Book",
      description:
        "Some of my Recent Projects are Reciepy Book using it can give customers advance option they can choose and order according to theri prefrences",
      tags: [
        {
          name: "Html5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Sajida0007",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };