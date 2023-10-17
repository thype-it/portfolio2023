export const projectContent1: StoryContentData = [
  {
    title:
      "The centerpiece is the Digital CV which embraces dynamic elements, such as soothing animations and scroll-based effects. It provides a more immersive experience,striving to make the interaction enjoyable and memorable.",
    highlightTitle: ["Digital CV", "portfolio", "blog"],
    text: "The portfolio section of the website is a window into my past projects. In addition to the professional aspects, the website also houses a blog where I store my thoughts, findings, and memories in written form.",
  },
  {
    title: "The main UI technologies used in this project on top of React",
    textArray: [
      "I chose Chakra UI for styling because it prioritizes accessibility, accelerates development, allows for enjoyable UI library work, offers a clean default design for customization, and seamlessly integrates with other frameworks.",
      "To implement scroll-based animations, I leveraged Framer Motion, seamlessly integrating animation logic within reusable components. ",
    ],
    highlightText: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion"],
  },
  {
    title:
      "I chose Next.js as the foundation because it not only improves site performance and SEO but also, by utilizing the new app directory, it enables me to create type-safe server logic and JavaScript object data structures directly on the server. This streamlines the development process, because it doesn’t require separate API requests or external database storage.",
    highlightTitle: [
      "app directory",
      "type-safe",
      "JavaScript object",
      "on the server",
    ],
  },
  {
    image: {
      name: "logoEvolution",
      extension: "jpg",
      alt: "Mike IT logo evolution illustration",
    },
    title: "Figma served as the starting point.",
    text: "I began by designing logos and establishing a brand identity, sketching the site's structure on paper, and then translating it into digital design files. Figma's prototyping capabilities were invaluable for perfecting animations and ensuring the site's structure aligned with its purpose. This meticulous planning process spanning over three weeks proved instrumental in preventing time wastage during the initial stages of development.",
  },
  {
    isTextBottom: true,
    image: {
      name: "designPhoneDesktop",
      extension: "jpg",
      alt: "Ilustration of different design for mobile and desktop",
    },
    title: "Time to dive into the UI development phase",
    text: "A substantial amount of effort was dedicated to fine-tuning the order sequences for animations and logic to achieve the desired visual effects. Additionally, I dedicated substantial time to create reusable and responsive components. Some of these components had varying logic and parts, depending on whether they were intended for mobile or desktop use.",
  },
  {
    title:
      "During this phase, I delved deeper into both Chakra UI and Framer Motion, significantly expanding my knowledge base. While this approach initially slowed down my development process, it proved invaluable in harnessing more of the libraries' features. For instance, by utilizing Chakra CLI for automatic type generation in my custom Chakra theme, I eliminated the need for manual type creation, enabling instant type support throughout the development process.",
  },
  {
    title: "Say hello to the build errors",
    image: {
      name: "buildError",
      extension: "jpg",
      alt: "Build error illustration",
    },
    text: "As I progressed to the server-side phase, I had already completed essential pieces of the app. The next step involved connecting to Vercel for deployment and enabling continuous integration for seamless app building. I began crafting the server-side logic for data handling, and along the way, I encountered a valuable lesson: when working with Next.js, there's no need to create explicit API routes or use methods like getStaticProps. This is because, with the new app directory structure, every component was inherently server-side rendered, although it did take some failed builds to fully grasp.",
  },
  {
    title:
      "Blazingly fast website that delivers both great user and developer experiences",
    text: " For the needs of this project, which didn't require a database and maintained consistent data types for both the frontend and backend, I could process data before it reached the client. Adding new content became a straightforward task, and I harnessed Next.js' placeholder blur functionality and a placeholder library to incorporate blurred versions of images, enhancing the user experience",
  },
  {
    image: {
      name: "serverData",
      extension: "jpg",
      alt: "Server data illustration",
      cover: true,
    },
  },
];
