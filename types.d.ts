type ScrollMotionProps = {
  scaleMotion?: import("framer-motion").MotionValue<number>;
  opacityMotion?: import("framer-motion").MotionValue<number>;
  wrapperOpacityMotion?: import("framer-motion").MotionValue<number>;
};

type Story = {
  id: string;
  title: string;
  link?: {
    href: string;
    text: string;
  };
  content: StoryContentItem[];
};

type StoryContentItem = (StoryContentItemText | StoryContentItemMedia) & {
  id: string;
};

type StoryContentData = (
  | StoryContentItemText
  | (Omit<StoryContentItemMedia, "image"> & {
      image: {
        name: string;
        extension: "png" | "jpg";
        alt: string;
        cover?: boolean;
      };
    })
)[];

type StoryContentItemMedia = {
  image: {
    name: string;
    extension: "png" | "jpg";
    alt: string;
    base64?: string;
    imgSrc: string;
    cover?: boolean;
  };
  videoSrc?: string;
  textArray?: never;
  title?: string;
  text?: string;
  isTextBottom?: boolean;
};

type StoryContentItemText = {
  title?: string;
  text?: string;
  textArray?: string[];
  highlightText?: string | string[];
  highlightTitle?: string | string[];
};

type Project = {
  id: string;
  title: string;
  link?: {
    href: string;
    text: string;
  };
  description: string;
  techStack: string[];
  content: StoryContentItem[];
};
