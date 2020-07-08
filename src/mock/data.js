import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sudha Shrestha', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Sudha',
  subtitle: `Mobile Developer at Codse`,
  cta: '',
  img: 'icon.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Experienced software engineer with a demonstrated history of working in web and mobile development. Started with the native application development in Java, since then I have worked with the development of mobile applications in a cross-platform tool like React Native.',
  paragraphTwo:
    'Even though I can work independently in several small to large scale projects, I am also a good team player who can fit right in for complex projects. I am a proactive, top-notch communicator and a problem solver who is right by your side to make the dream project come true.',
  paragraphThree: 'Thank you for checking in, hopefully, we will collaborate soon.',
  resume: 'https://www.linkedin.com/in/sudhastha/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'timecraze.png',
    title: 'Timecraze',
    info:
      'TimeCraze is not just another event planning app, it has its own important feature, that helps it stand out among plethora of event apps. Designed by the client himself, and coded with love in react-native, it has a beautiful UI, real-time synchronization of events and much more.',
    info2:
      'I can’t disclose more features, as the app hasn’t been published yet and the client is still using it as MVP. ',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fxsamurai.png',
    title: 'FX Samurai',
    info:
      'FX Samurai is a Forex trading learning application to help people master the foreign exchange and stock trading market in a fun way. The app is targeted to Japanese users.',
    info2:
      'This app includes real-time Forex trading game simulator, highly illustrated lessons, fun quiz with explanations, trading hour information and line authentication.',
    url: '',
    repo: 'https://github.com/sudhashrestha', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'zaperp.png',
    title: 'ZapERP',
    info:
      'ZapERP offers CRM, inventory management, sales/invoice management and much more. The app was initially taken as a small project then we kept on adding different module to reach to the form it is today.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'itsmesudha12@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sudha_shrestha',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/itsmesudha',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sudhastha/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sudhashrestha',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
