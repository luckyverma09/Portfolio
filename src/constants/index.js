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
  nodejs,
  mongodb,
  git,
  gla,
  helpyChat,
  amazonClone,
  tickTacToe,
  rockPaperScissor,
  currencyConverter,
  weatherApp,
  vCall,
  brainBoard,
  imageHub,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Education',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Software Engineer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'College Student',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Compunter Science Student',
    company_name: 'GLA University',
    icon: gla,
    iconBg: '#383E56',
    date: 'Aug 2021 - May 2025',
    points: [
      ' Proficient in key computer science domains, including Operating Systems (OS), Database Management Systems (DBMS), Computer Networks (CN), and Data Structures and Algorithms (DSA), showcasing a solid academic background.',
      'Well-versed in Java, with hands-on experience in core Java concepts and Java 8+ features, enabling efficient problem-solving and application development.',
      'Gained foundational knowledge and practical understanding of Machine Learning concepts, equipping me to explore and contribute to AI-driven solutions.',
      'Acquired proficiency in the MERN stack (MongoDB, Express.js, React, Node.js), enabling the development of end-to-end web applications with modern technologies.',
    ],
  },
];

const projects = [
  //Brain board
  {
    name: 'Brain Board',
    description:
      "A modern Notion clone featuring real-time collaboration, block-based editing, and authentication, built with React, NodeJS, and Convex for seamless document management and team collaboration. This project is a full-stack application that replicates Notion's core features, including real-time collaboration, block-based editing, and user authentication, to provide a modern, efficient document management system.",
    tags: [
      {
        name: 'react',
        color: 'orange-text-gradient',
      },
      {
        name: 'convex',
        color: 'green-text-gradient',
      },
      {
        name: 'clerk',
        color: 'pink-text-gradient',
      },
    ],
    image: brainBoard,
    source_code_link: 'https://github.com/luckyverma09/brain-board',
  },

  //Vcall
  {
    name: 'Vcall',
    description:
      "This project is a modern video conferencing application that leverages ZEGOCLOUD's real-time communication API for seamless audio-video interactions and high-quality streaming capabilities. The integration with Firebase as the backend database ensures secure user authentication, real-time data synchronization, and efficient storage of user profiles and meeting data.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'zegocloud',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
    ],
    image: vCall,
    source_code_link: 'https://github.com/luckyverma09/vcall',
  },

  //Image hub
  {
    name: 'Image Hub',
    description:
      'This project is a web application that allows users to upload, view, share, and delete images. It is built using Next.js and integrates with Cloudinary for image storage and management. The application features user authentication powered by Clerk.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'orange-text-gradient',
      },
      {
        name: 'cloudinary',
        color: 'green-text-gradient',
      },
    ],
    image: imageHub,
    source_code_link: 'https://github.com/luckyverma09/image-hub',
  },

  //helpy chat
  {
    name: 'Helpy Chat',
    description:
      "Experience seamless AI conversations with this MERN stack chatbot powered by OpenAI's API, featuring real-time responses and JWT authentication.A full-stack application built with MongoDB, Express, React, and Node.js that enables natural language interactions with a modern, secure interface.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'orange-text-gradient',
      },
      {
        name: 'openai',
        color: 'pink-text-gradient',
      },
    ],
    image: helpyChat,
    source_code_link: 'https://github.com/luckyverma09/HelpyChatProject',
  },

  //weather app
  {
    name: 'Weather App',
    description:
      'Stay informed with real-time weather conditions through this streamlined web application that delivers precise meteorological data with a clean, responsive interface. A lightweight weather tracker built with HTML, CSS, and JavaScript that integrates OpenWeatherMap API to provide essential weather metrics including temperature, humidity, wind speed, and atmospheric conditions',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'api',
        color: 'blue-text-gradient',
      },
    ],
    image: weatherApp,
    source_code_link: 'https://github.com/luckyverma09/Weather-App',
  },

  //currency converter
  {
    name: 'Currency Converter',
    description:
      'Experience real-time currency conversions with this sleek web application featuring live exchange rates, interactive flag displays, and an intuitive user interface.A responsive currency converter built with HTML5, CSS3, and JavaScript that delivers accurate conversions through API integration, making international money calculations effortless.',
    tags: [
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'api',
        color: 'orange-text-gradient',
      },
    ],
    image: currencyConverter,
    source_code_link: 'https://github.com/luckyverma09/Currency-Converter',
  },

  //tic tac toe
  {
    name: 'Tic Tac Toe',
    description:
      'This is a simple implementation of the classic Tic-Tac-Toe game using TML, CSS, and JavaScript. This project provides a web-based Tic-Tac-Toe game here two players can take turns to play and try to win the game.',
    tags: [
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: tickTacToe,
    source_code_link: 'https://github.com/luckyverma09/Tic-Tac-Toe/',
  },

  //rock paper scissor
  {
    name: 'Rock Paper Scissor',
    description:
      'Challenge the computer in this classic Rock, Paper, Scissors web game featuring real-time score tracking and a sleek responsive design. A fun, interactive implementation of the timeless hand game that lets you compete against AI while maintaining your winning streak.',
    tags: [
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: rockPaperScissor,
    source_code_link: 'https://github.com/luckyverma09/Tic-Tac-Toe/',
  },

  //amazon ui clone
  {
    name: 'Amazon UI Clone',
    description:
      'This project is a simplified clone of the Amazon website created using HTML and CSS only. It serves as a practice project for front-end web development.',
    tags: [
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'orange-text-gradient',
      },
    ],
    image: amazonClone,
    source_code_link: 'https://github.com/luckyverma09/Amazon_clone?tab=readme-ov-filet',
  },
];

export { services, technologies, experiences, projects };
