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
  subtitle: `Mobile Developer`,
  cta: '',
  img: 'icon.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Experienced software engineer with a demonstrated history of working in mobile development. Started with native application development in Java, since then I have worked with the development of mobile applications in a cross-platform tool like React Native.',
  paragraphTwo:
    'Even though I can work independently in several small to large scale projects, I am also a good team player who can fit right in for complex projects. I am a proactive, top-notch communicator and a problem solver who is right by your side to make the dream project come true.',
  paragraphThree: 'Thank you for checking in, hopefully, we will collaborate soon.',
  // resume: 'https://www.linkedin.com/in/sudhastha/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'evil_minds.png',
    title: 'Evil Minds: Dirty Charades!',
    info: 'Evil Minds is the brand new whole-body word game from Evil Studios Limited!',
    info2: 'The game consists of fun animations along with tilt detection.',
    features: [
      'Animation',
      'In-app purchase',
      'Analytics',
      'Sensors',
      'Push Notification',
      'Deep Linking',
    ],
    android: 'https://play.google.com/store/apps/details?id=com.evilstudios.evilminds',
    ios: 'https://apps.apple.com/us/app/evil-minds-dirty-charades/id962566898',
  },
  {
    id: nanoid(),
    img: 'black_cards.png',
    title: 'Black Cards: You Against Humanity Expansion!',
    info:
      'Black Cards is an easy to use virtual expansion pack for fill-in-the-blank style card games.',
    info2: 'Another game from Evil Studios Limited!',
    features: ['Animation', 'In-app purchase', 'Analytics', 'Push Notification', 'Deep Linking'],
    android: 'https://play.google.com/store/apps/details?id=com.evilapples.blackcards',
    ios: 'https://apps.apple.com/us/app/black-cards/id788887465',
  },
  {
    id: nanoid(),
    img: 'eeep.png',
    title: 'eeep!',
    info:
      'eeep! makes it easier to find inspirational hotels, bars, restaurants and visitor attractions through curated content and beautiful photography.',
    info2: '',
    features: [
      'Social Login',
      'Maps',
      'Analytics',
      'REST API integration',
      'Push Notification',
      'Deep Linking',
      'Followers',
    ],
    android: 'https://play.google.com/store/apps/details?id=app.eeep.travel',
    ios: 'https://apps.apple.com/us/app/eeep/id1553031915',
  },
  {
    id: nanoid(),
    img: 'opiner.png',
    title: 'Opiner Responder',
    info: `Opiner is a simple app that lets user share their thoughts and opinions through videos. This app contains features like video recording, compressing editing, uploading videos/photos and push notifications.`,
    info2: '',
    url: '',
    android: 'https://play.google.com/store/apps/details?id=app.opiner',
    ios: 'https://apps.apple.com/app/id1492476764',
    features: [
      'Video Recording',
      'Video Compressing',
      'Push notifications',
      'REST API Integration',
      'Auth0',
      'Deep linking',
      'Moment Timezone',
      'Internationalization',
    ],
  },
  {
    id: nanoid(),
    img: 'causeway.png',
    title: 'Causeway.sg - Singapore Traffic Camera Stream',
    info: `Causeway shows the real-time traffic load and forecast at Singapore's causeways. The app also has a directory of several place categories, their information and contact, and currency exchange feature.`,
    info2: '',
    url: '',
    android: 'https://play.google.com/store/apps/details?id=com.causeway',
    ios: 'https://apps.apple.com/us/app/id1508468348',
    repo: '', // if no repo, the button will not show up
    features: ['REST API integration', 'Google Ads', 'Location tracking', 'Internationalization'],
  },
  {
    id: nanoid(),
    img: 'fxsamurai.png',
    title: 'FX Samurai',
    info:
      'FX Samurai is a Forex trading learning application to help people master the foreign exchange and stock trading market in a fun way. The app is targeted to Japanese users.',
    info2:
      'This app includes real-time Forex trading game simulator, highly illustrated lessons, fun quiz with explanations, trading hour information and line authentication.',
    android: 'https://play.google.com/store/apps/details?id=com.fxsamurai.android',
    ios: '',
    features: [
      'Redux',
      'Victory Native',
      'Trading chart',
      'Real-time updates',
      'Firebase',
      'Line Authentication',
    ],
  },
  {
    id: nanoid(),
    img: 'zaperp.png',
    title: 'ZapERP',
    info:
      'ZapERP offers CRM, inventory management, sales/invoice management and much more. The app was initially taken as a small project then we kept on adding different module to reach to the form it is today.',
    info2: '',
    url: '',
    android: 'https://play.google.com/store/apps/details?id=com.zaperp.android',
    ios: 'https://apps.apple.com/us/app/zaperp/id1449602725',
    features: ['REST API Integration', 'Redux', 'Axios', 'MomentJS'],
  },
  {
    id: nanoid(),
    img: 'opinion_wizard.png',
    title: 'Opinion Wizard',
    info: `This project was completed in a very short period of time. Opinion wizard has features like paid surveys, earn easy money doing focus groups and online surveys.`,
    info2: '',
    android: 'https://play.google.com/store/apps/details?id=com.idxbmj9l1fzv3oibbzi6g',
    ios: '',
    features: ['Push notifications', 'REST API integration', 'Axios', 'MomentJS'],
  },
  {
    id: nanoid(),
    img: 'timecraze.png',
    title: 'Timecraze',
    info:
      'TimeCraze is not just another event planning app, it has its own important feature, that helps it stand out among plethora of event apps. Designed by the client himself, and coded with love in react-native, it has a beautiful UI, real-time synchronization of events and much more.',
    info2:
      'I can’t disclose more features, as the app hasn’t been published yet and the client is still using it as MVP. ',
    features: ['Firebase', 'Firebase Cloud Functions', 'Redux', 'Facebook SDK', 'MomentJS'],
  },
  {
    id: nanoid(),
    img: 'mogul_lite.png',
    title: 'Mogul Lite',
    info: 'Mogul Lite is a real-state app that lets user view properties and their information.',
    info2:
      'I can’t disclose more features, as the app hasn’t been published yet and the client is still using it as MVP. ',
    features: [
      'Google Maps',
      'In-app purchase',
      'Geolocation',
      'Real time location tracking',
      'REST API Integration',
      'Google Geocoding API',
      'Redux',
      'Video player',
    ],
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
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/sudha',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
