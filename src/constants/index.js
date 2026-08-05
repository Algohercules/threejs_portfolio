export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Mr. Priyansh Rai',
    position: 'Associate manager at Exeliq tech solutions',
    img: 'assets/review1.png',
    review:
      'Working with Adarsh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mr. KB Dubey',
    position: 'Student coordinator at ABESIT',
    img: 'assets/review2.png',
    review:
      'Adarsh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our college website, and our online reach have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Mr. Adarsh Kumar Verma',
    position: 'Coordinator of LDL (Light-De-Literacy)',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adarsh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ms. Aanya Soni',
    position: 'IIC COordinator at ABESIT',
    img: 'assets/review4.png',
    review:
      'Adarsh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Pathfinding & Maze Visualiser',
    desc: 'Built a web app to visualize algorithms like BFS, DFS, Dijkstra, A*, and JPS with real-time animation and dynamic interaction,Added maze generators (Backtracking, Prims, Kruskals) and intuitive drag-drop UI for start/end nodes and wall drawing,Used Redux for state management and Tailwind CSS for responsive styling, deployed the project live using Vercel platform,Visualizes algorithm performance and pathfinding logic, enabling user to intuitively compare traversal strategies in real time',
    subdesc:
      ' Self Project [React | TypeScript | Tailwind | Redux Toolkit ]',
    href: 'https://github.com/whitedevil2829/Pathfinding_Visualiser.git',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Student Record Management System',
    desc: 'Built an efficient C++ app to manage student records via CSV/Excel files, significantly reducing manual workload,Implemented dual-role access: Admins can create/update/delete records; Students can securely,view and access their data,Added login authentication, real-time CSV I/O handling, and structured console UI with menus,and load indicators,Enhanced the usability through prompt-based navigation, robust input validation, and features essential for academic use Crash',
    subdesc:
      ' Self Project [C++ File I/O Windows Desktop]',
    href: 'https://github.com/whitedevil2829/Student_Management_Sys.git',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Severity Prediction using ML for Public Safety',
    desc: 'Developed a machine learning model to classify crash severity (minor, major, fatal) using historical data and traffic patterns,Engineered features like speed bins, lane widths, and overspeeding indicators; optimized model efficiently using Optuna,Achieved high classification accuracy using ensemble methods (Random Forest, XGBoost, CatBoost) and tuned with EDA,Proposed practical data-driven interventions (dynamic speed limits, dedicated lanes) to significantly improve the road safety',
    subdesc:
      ' Self Project [Optuna | Random Forest | XGBoost',
    href: 'https://github.com/Algohercules/CrashIQ.git',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: ' Crowdsourced Civic lssue Reporting and Resolution System',
    desc: 'The final deliverable should include a mobile platform that supports cross-device functionality and seamless user experience. Citizens must be able to capture issues effortlessly, track the progress of their reports, and receive notifications through each stage — confirmation, acknowledgment, and resolution. On the back end, a web-based administrative portal should enable municipal staff to filter issues by category, location, or priority, assign tasks, update statuses, and communicate progress. The platform should integrate an automated routing engine that leverages report metadata to correctly allocate tasks to departments. A scalable, resilient backend must manage high volumes of multimedia content, support concurrent users, and provide APIs for future integrations or extensions. Lastly, the solution should deliver analytics and reporting features that offer insights into reporting trends, departmental response times, and overall system effectiveness — ultimately driving better civic engagement and government accountability. Organization Government of Jharkhand Department Department of Higher and Technical Education Category Software Theme Clean & Green Technology',
    href: 'https://github.com/Algohercules/SIH-2025.git',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'AudioLink',
    desc: 'Developed an application that enables a phone or laptop to connect and manage multiple Bluetooth devices from a single interface. The application streamlines device discovery, pairing, and connection management, allowing users to monitor and interact with several Bluetooth peripherals simultaneously.',
    subdesc:
      ' Self Project [React | TypeScript | Tailwind | Redux Toolkit ]',
    href: 'https://github.com/Algohercules/AudioLink.git',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Exeliq Tech Solutions',
    pos: 'Full Stack Web Developer',
    duration: '2026 june - july',
    title: "Developed responsive, user-friendly web application interfaces using modern technologies (HTML, CSS, JavaScript, React) Assisted in backend development and RESTful API integration to support full-stack application functionality Worked with relational/NoSQL databases for efficient data storage, retrieval, and management, Utilized Git and GitHub for version control, collaborative development, and code management,Participated in requirement analysis, code reviews, and debugging sessions to ensure high-quality deliverables,Followed industry-standard software engineering practices, coding conventions, and technical documentation procedures.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CODSOFT',
    pos: 'C++ Developer',
    duration: '2025 - 2026',
    title: "Worked on developing and optimizing C++ applications while applying object-oriented programming principles, data structures, and algorithms. Collaborated on debugging, testing, and implementing efficient solutions, gaining hands-on experience in writing clean, maintainable, and high-performance code.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Light-De-Literacy (LDL)',
    pos: 'Student Coordinator',
    duration: '2019 - 2020',
    title: "Volunteered with an NGO dedicated to providing free education to underprivileged students. Conducted engaging learning sessions, mentored students, and helped create a supportive environment that encouraged academic growth and confidence while contributing to the organization's mission of making quality education accessible to all.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
