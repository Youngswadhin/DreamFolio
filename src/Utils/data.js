import FrontendImage from '../Assets/fronted.png';
import BackendImage from '../Assets/backend.png';
import ToolsImage from '../Assets/tools.png';
import SkillsImage from '../Assets/skills.png';

export const SKILLS = [
  {
    title: "Frontend",
    icon: FrontendImage, 
    skills: [
      { skills: "HTML", percentage: "80%" },
      { skills: "CSS", percentage: "90%" },
      { skills: "Javascript", percentage: "75%" },
      { skills: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: BackendImage,
    skills: [
      { skills: "Node.js", percentage: "70%" },
      { skills: "Express.js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: ToolsImage,
    skills: [
      { skills: "Git & GitHub", percentage: "85%" },
      { skills: "Visual Studio Code", percentage: "75%" },
      { skills: "Android Studio", percentage: "60%" },
      { skills: "Responsiive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: SkillsImage,
    skills: [
      { skills: "Problem Solving", percentage: "80%" },
      { skills: "Collaboration", percentage: "90%" },
    ],
  },
];


export const PROJECTS = [
  {
    title:"Travel App",
    date:"HTML | CSS | Javascript",
    responsibilities: [
      "Implemented responsive design principles, ensuring seamless functionality across various devices and screen sizes.",
      "Developed and maintained a user-friendly interface, incorporating intuitive navigation and interactive features to enhance user satisfaction. ",
      "Utilized SEO best practices to optimize content and improve the website's search engine ranking, resulting in a 20% increase in organic traffic. ",
      "Provided technical support to users, addressing inquiries and troubleshooting issues promptly. ",
    ],
  },
  {
    title:"Smart Home Automation System",
    date:"C++ | Flutter | Ardiuno | Web-Socket | ESP-32 ",
    responsibilities: [
      "Design and implement a comprehensive smart home automation system to enhance energy efficiency, security, and user convenience. ",
      "Integrated IoT devices, including smart thermostats, lighting systems, and security cameras, to enable remote control and monitoring via a mobile app.",
      "Programmed custom automation scripts using Python to optimize energy usage based on occupancy patterns and external factors. ",
      "Implemented voice control functionality through integration with virtual assistants like Amazon Alexa and Google Assistant. ",
    ],
  },

]
