import image from "../../assets/expense-tracker-1.png";
import projectOne from "../../assets/videos/dev-connector.mp4";
import projectTwo from "../../assets/videos/codered.mp4";
import projectThree from "../../assets/videos/equicode-site.mp4";
import relaxer from "../../assets/sideProjects/relaxer.png";

export const projects = [
  {
    key: 1,
    name: "Dev Connector",
    category: "React.js | Node.js | MongoDB | Express | Redux | Github API",
    about:
      "A social network for developers. Small posts can be created that contain a feature of likes and commenting on other user’s posts. Github API is used to fetch last 5 updated repositories of the user.",
    image: image,
    video: projectOne,
    github: " https://github.com/srivastavayushi/Dev-Connector",
    deployOn: "https://dev-connector-mern-project.herokuapp.com/",
  },
  {
    key: 2,
    name: "CodeRED",
    category: "React.js | Node.js | MongoDB | Express | Google Maps API | Auth0",
    about:
      "CodeRED aims to provide quick and nearby access to sanitary napkins and toilets in all parts of the world by creating a map of all stores and restrooms and incentivising users to add their own restrooms or stores to the map. Google Maps API is used to help users locate nearest store or restrooms during emergency using browser’s geolocation.",
    image: image,
    video: projectTwo,
    github: "https://github.com/kaustuvkaran01/CodeRED",
    deployOn: "https://fathomless-anchorage-82136.herokuapp.com/",
  },
  {
    key: 3,
    name: "EquiCode",
    category: "React.js | TailwindCSS | Google Sheets API",
    about:
      "Official website of EquiCode, a community focusing on the holistic development of beginners. Google Sheets API to adds details of attendees to organisation's database. TailwindCSS is used to enhance User Interface and make it user-friendly.",
    image: image,
    video: projectThree,
    github: "https://github.com/EquiCode/EquiCode-Website",
    deployOn: "https://equicode-amity.netlify.app/",
  },
];

export const sideProjects = [
  {
    key: 1,
    category: "React.js Express Redux Google Maps API MongoDB",
    name: "Volunteer Up",
    about:
      "Application developed for volunteers to connect and use Maps API track down stray animals in need.",
    github: "https://github.com/srivastavayushi/volunteer",
    deployOn: "https://volunteer-up.herokuapp.com/",
    image: relaxer,
  },
  {
    key: 2,
    category: "React.js Breaking Bad API",
    name: "Breaking Bad Cast",
    about:
      "Basic React App that uses the breaking bad api to show and filter characters from the show",
    github: "https://github.com/srivastavayushi/Breaking-Bad-Cast",
    deployOn: "https://breaking-bad-cast-ayushi.netlify.app/",
    image: relaxer,
  },
  {
    key: 3,
    category: "HTML SASS JavaScript Wikipedia API",
    name: "Search Me",
    about:
      "A simple Google Clone that uses fetch API to retrieve search results from Wikipedia API",
    github: "https://github.com/srivastavayushi/Search-App",
    deployOn: "https://search-me-project.netlify.app/",
    image: relaxer,
  },
  {
    key: 4,
    category: "HTML CSS JavaScript",
    name: "Relaxer Application",
    about:
      "A relaxing breathing app with a visual director to tell you when to breathe in, hold and breathe out.",
    github: "https://github.com/srivastavayushi/relaxer-app",
    deployOn: "https://relaxer-project.netlify.app/",
    image: relaxer,
  },
  {
    key: 5,
    category: "Python Modules:random,pyperclip,tkinter",
    name: "Random Password",
    about:
      "This application can generate random password, with the combination of letters, numerics, and special characters.",
    github: "https://github.com/srivastavayushi/Random-Password",
    deployOn: "https://github.com/srivastavayushi/Random-Password",
    image: relaxer,
  },
  {
    key: 6,
    category: "Python Modules:pygame,time,random",
    name: "Battle Snake",
    about:
      "Battlesnake is a single-player game where snake the moves independently attempting to find food, avoid hiting the circumference, and stay alive as long as possible.",
    github: "https://github.com/srivastavayushi/BattleSnake",
    deployOn: "https://github.com/srivastavayushi/BattleSnake",
    image: relaxer,
  },
];
