type ScrollMotionProps = {
  scaleMotion?: import("framer-motion").MotionValue<number>;
  opacityMotion?: import("framer-motion").MotionValue<number>;
  wrapperOpacityMotion?: import("framer-motion").MotionValue<number>;
};

type Story = {
  id: string;
  title: string;
  content: StoryContentItem[];
};

type StoryContentItem = (StoryContentItemText | StoryContentItemImg) & {
  id: string;
};

type StoryContentItemImg = {
  image: {
    name: string;
    extension: "png" | "jpg";
    alt: string;
  };
  title?: string;
  text?: string;
  isTextBottom?: boolean;
};

type StoryContentItemText = {
  title?: string;
  text?: string;
  highlightText?: string | string[];
  highlightTitle?: string | string[];
};
