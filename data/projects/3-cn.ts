export const projectContent3: StoryContentData = [
  {
    image: {
      name: "cnCards",
      alt: "CN Group Comany branded card used for poker planning during sprint planning meetings.",
      extension: "jpg",
    },
    text: "Poker planning cards used for estimating features complexity",
  },
  {
    title:
      "Hackastack - A robust internal system streamlining internal affairs, used by the entire workforce, including management.",
    textArray: [
      "While I was a part of the frontend team, the main focus was on creating a new feature designed to streamline the management of company business trips. In its initial phase, the steps included creating a trip, utilizing all internal data, which would then go through an approval workflow with the product manager. It also automated the distribution of emails to the relevant employees and recorded the details of each business trip in their individual system accounts.",
    ],
  },
  {
    textArray: [
      "Additionally, it offered the flexibility to edit personal records of business trips and generate PDFs containing all the trip details, which could then be used for handling tasks such as compensating employees for their business trip expenses.",
      "Implementing these functionalities required extensive work with controlled forms using  React Hook Form library that both requested and dispatched the data. For the UI And design played a major role, used for creating complex forms, data tables and other components.",
      "Moreover, I made contributions to the system by refactoring older components, such as modals, to adhere to Ant Design principles and addressed existing bugs. Some of the tasks also involved modifying the MariaDB database structure and performing database migrations using the Sequelize ORM.",
    ],
  },
  {
    title: "CN Group Company Website",
    textArray: [
      "The UI components are divided into paragraphs, which are composed of so-called elements - reusable pieces of custom UI components styled with the Emotion library. Each paragraph is registered by an ID and available in the CMS to be added to the website's database of building blocks. It has options that non-developers can also experiment with in Storybook to see how it behaves. All its props and options are received by the frontend and transferred as data back to the paragraphs, allowing for modifications to both their visual and behavioral aspects and for displaying the data.",
    ],
  },
  {
    textArray: [
      "For the majority of the project, I focused on developing new UI features - paragraphs and adding, editing, and sorting corresponding elements accordingly. I also connected paragraphs to the backend, ensuring the data structure was sound, and the data was processed and displayed correctly.",
      "I communicated with the backend team to establish the appropriate data structure for the paragraphs, as I was already creating the types for the mock data to be handled by the final component.",
      "Additionally, it was my responsibility to create the appropriate .story files for the new paragraphs to be fully interactive in Storybook.",
      "The picture on the right shows a cost calculator used for estimating the cost of a project - one of the features I was resposible for.",
    ],
  },
  {
    image: {
      name: "costCalculator",
      extension: "jpg",
      alt: "Screenshot of a cost calculator used for estimating the cost of a project, feature that I worked on.",
      cover: true,
    },
  },
  {
    title:
      "Engaging in projects for CN Group, now Ciklum Western Europe, was a rewarding journey, enriched by various company and project-related events. They not only fostered teamwork but also allowed me to personally connect with the people I worked alongside, turning colleagues into friends. This made attending daily scrum meetings and providing and receiving reviews from fellow developers enjoyable and constructive.",
  },
];
