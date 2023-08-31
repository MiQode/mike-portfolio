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
  refactory,
  stanbic,
  priceIndex,
  carrent,
  mukozi,
  jobit,
  threejs,
  baker,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
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
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
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
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Price Index Boats',
    icon: priceIndex,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Present',
    points: [
      'Designing and building reusable React components that encapsulate specific functionalities.',
      'Collaborating using version control systems like Git to manage code changes, merge requests, and maintain a clean and organized codebase.',
      'Ensuring the user interface works seamlessly across various devices and screen sizes by implementing responsive design principles.',
      'Keeping up with the latest trends, updates, and best practices in the React ecosystem and web development in general.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Stanbic Bank Incubator',
    icon: stanbic,
    iconBg: '#383E56',
    date: 'April 2020 - June 2020',
    points: [
      'Converting offline operations of the organisation into an online platform',
      'Setting up deployment pipelines using tools like Jenkins, Travis CI, or GitHub Actions to automate the process of building, testing, and deploying the application.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews to provide and receive constructive feedback, ensuring code quality, adherence to best practices, and consistency.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Refactory',
    icon: refactory,
    iconBg: '#383E56',
    date: 'Jan 2020 - Jun 2020',
    points: [
      'Writing clean, efficient, and maintainable code to create interactive and responsive user interfaces using React and related technologies.',
      'Identifying and addressing performance bottlenecks by optimizing component rendering and minimizing re-renders.',
      'Collaborating with UI/UX designers to translate design mockups and wireframes into functional React components while maintaining the intended user experience.',
      'Debugging issues and errors in the application using browser developer tools and writing unit and integration tests using libraries like Jest, Enzyme, or React Testing Library.',
    ],
  },
];

const testimonials = [
  {
    testimonial: `Choosing Mike to handle the frontend development was a brilliant decision. 
                  The user interface they designed is intuitive and inviting, creating an enjoyable browsing experience for our clients.`,
    name: 'Baker D.',
    designation: 'CEO',
    company: 'ABU East Africa',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    testimonial: `I needed a web frontend developer who could showcase our vessels in the best light possible. Mike's ability to balance 
                  aesthetics with functionality resulted in a seamless browsing experience that truly stands out.`,
    name: 'Timothy B.',
    designation: 'CEO',
    company: 'Price Index',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: `Mike not only understood the intricacies of our business model but also designed an interface that catered to both employers 
                  and job seekers seamlessly. His commitment to creating a platform that resonates with our target audience has been invaluable.`,
    name: 'Martha R.',
    designation: 'CTO',
    company: 'Mukozi Co.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'ABU East Africa',
    description: `Website platform that professionally showcases the company and what it offers to the public. 
      Ot allows users to search, book, and choose travel requirements from various destinations, 
      providing a convenient and efficient solution for vacation and business needs.`,
    tags: [
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'css3',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'http://abueastafrica.com/',
  },
  {
    name: 'Price Index Boats',
    description: `Web application that enables users to search for luxury boats for sale and for hire, 
      view specifications to suitably customise the client's needs for luxury rides, family parties and water lifestyle.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Mukozi',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
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
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: mukozi,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
