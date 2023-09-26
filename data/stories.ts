//since not all components in digitalCV page include stories,
//slugs are added manually inside the component that needs it
//the slug needs to be the same as the id of the story

import checkStoriesDataValidity from "@/utils/checkStoriesDataValidity";

//Story content

const storyContent: (StoryContentItemText | StoryContentItemImg)[] = [
  {
    image: {
      name: "image2",
      extension: "png",
      alt: "test alt",
    },
    title: "Lorem ipsum dolor sit amet, consecte",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.",
    highlightTitle: "lorem",
  },
  {
    image: {
      name: "image2",
      extension: "png",
      alt: "test alt",
    },
  },
  {
    text: `In this dynamic field, frontend developers utilize a combination of HTML, CSS, and JavaScript 
    to craft the user interface. HTML forms the structural backbone of web content, defining the hierarchy 
    of elements. CSS then steps in to style these elements, specifying their colors, fonts, layouts, 
    and animations. JavaScript adds the interactivity, enabling features like dynamic content, user input 
    validation, and real-time updates.
    Frontend developers must keep up with evolving web standards,
     responsive design principles, and user experience best practices to deliver seamless and accessible 
     digital experiences that captivate and engage users across a wide range of devices and screen sizes. 
     Their work plays a crucial role in shaping our online interactions and leaving a lasting impression 
     on users.`,
    highlightText: "HTML forms the structural backbone",
  },
  {
    image: {
      name: "image2",
      extension: "png",
      alt: "test alt",
    },
    text: "Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte .Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte",
  },
  {
    image: {
      name: "image2",
      extension: "png",
      alt: "test alt",
    },
    title: "Lorem ipsum dolor sit amet, consecte",
    isTextBottom: true,
  },
];

//add Ids

const storyContentWithIds = storyContent.map((item, index) => ({
  id: index.toString(),
  ...item,
}));

//Story data

const data: Story[] = [
  {
    id: "id",
    title: "Lorem ipsum dolor sit amet",
    content: storyContentWithIds,
  },
];

checkStoriesDataValidity(data);

export default data;
