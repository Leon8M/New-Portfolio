import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  docker,
  rust,
  python,
  cplus,
  flask,
  wellbe,
  tonnies,
  leads,
  screen

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
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Pyhon Developer",
      icon: backend,
    },
    {
      title: "CRUD Apps Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const projects = [
    {
      name: "WellBe",
      description:
        "A still in development Web-based platform that allows users to store journal entries, goals and soon to be able to track expenses.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: wellbe,
      source_code_link: "https://github.com/Leon8M/WellBe",
    },
    {
      name: "Tonnies",
      description:
        "Web application I made temporaliry for my uncle as his portfolio. Currently building a new one using React.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: screen,
      source_code_link: "https://github.com/Leon8M/Anthony-Njeru",
    },
    {
      name: "Leads Tracker",
      description:
        "Just a simple Google Chrome extension for storing present tab url for use later.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: leads,
      source_code_link: "https://github.com/Leon8M/Leonex-Codes/tree/main/HeadsUp",
    },
  ];
  
  export { services, technologies, projects };