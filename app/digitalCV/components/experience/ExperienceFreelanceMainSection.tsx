import {
  Box,
  Center,
  Container,
  Flex,
  Highlight,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  MotionValue,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import { DeviceFrameset } from "react-device-frameset";

import type { ScrollItem } from "./types";

import { ContentContainer, DiscoverButton } from "@/app/components";
import { ChakraNextImage } from "@/app/components/media";
import { BoxMotion, CenterMotion, VstackMotion } from "@/app/components/motion";
import { SmallText, TextBlock } from "@/app/components/text";
import logoWhite from "@/public/media/logo/logo_white.svg";
import ferraraWeb from "@/public/media/oldWebs/ferrara.png";
import jovineckyWeb from "@/public/media/oldWebs/jovinecky.png";
import ferraraWebPhone from "@/public/media/oldWebs/mobile/ferrara.jpg";
import jovineckyWebPhone from "@/public/media/oldWebs/mobile/jovinecky.jpg";
import thypeWebPhone from "@/public/media/oldWebs/mobile/thype.jpg";
import thypeWeb from "@/public/media/oldWebs/thype.png";
import { getScrollRange } from "@/utils/getScrollRange";

//text content:
const content = {
  hero: {
    topic: `Experience`,
    title: `Freelance carier. Satisfied clients.`,
    text: `
      I've had the opportunity to work on numerous websites, both independently
      and collaboratively. Additionally, I engage in small-scale projects
      with other enthusiastic developers.
    `,
  },
};
//variables:
const scrollContent: ScrollItem[] = [
  {
    id: 1,
    text: `My responsibilities span the full development process, from 
    client consultations to logic design, responsive implementation, 
    and timely project delivery.`,
    highlightedText: ["full development process"],
    image: {
      desktop: ferraraWeb,
      mobile: ferraraWebPhone,
    },
  },
  {
    id: 2,
    text: `Most of these projects involved building
    websites from scratch, utilizing technologies such as Sass, CSS3 animations,
    jQuery and React.`,
    highlightedText: "building websites from scratch",
    image: {
      desktop: jovineckyWeb,
      mobile: jovineckyWebPhone,
    },
  },
  {
    id: 3,
    text: `My previous web projects provided me with invaluable experience. 
    I'm currently focused on more complex web and mobile app development.`,
    highlightedText: "invaluable experience",
    image: {
      desktop: thypeWeb,
      mobile: thypeWebPhone,
    },
  },
];

const scrollContentLastImage: ScrollItem = {
  id: 500,
  text: "",
  highlightedText: "",
  image: {
    desktop: logoWhite,
    mobile: logoWhite,
  },
};

const deviceFrameImagesHeight = {
  desktop: 1800, //px
  mobile: 1700, //px
};

//animation:
const animationOrder = {
  start: 0.04, //start of device frame and text scrolling
  endOfTextScroll: 0.6, //end of text scrolling
  endOfDeviceFrameScroll: 0.7, //end of device frame scrolling
};

export default function ExperienceFreelanceMainSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: spring } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const physicsScrollX = { damping: 15, mass: 0.27, stiffness: 85 };

  const scrollYProgress = useSpring(spring, physicsScrollX);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const frameHeight = isSmallScreen
    ? deviceFrameImagesHeight.mobile
    : deviceFrameImagesHeight.desktop;

  const scrollTextInterval = useTransform(
    scrollYProgress,
    [animationOrder.start, animationOrder.endOfTextScroll],
    [0, 1]
  );

  const scrollImageInterval = useTransform(
    scrollYProgress,
    [animationOrder.start, animationOrder.endOfDeviceFrameScroll],
    [0, 1]
  );

  const y = useParallax(scrollYProgress, frameHeight * scrollContent.length);
  const isTextInView = useInView(textRef, { margin: "100% 0px -80% 0px" });

  return (
    <Box bg="black" mt={{ base: "24", md: "80" }} pos="relative">
      <ContentContainer>
        <TextBlock title={content.hero.title} topic={content.hero.topic}>
          {content.hero.text}
        </TextBlock>
      </ContentContainer>
      <Box
        ref={targetRef}
        as="section"
        bg="black"
        h={`${scrollContent.length * 100}vh`}
        pos="relative"
        pt="20"
        w="full"
      >
        <Box h="100vh" left={0} pos="sticky" top={0} w="full">
          <Container
            h="40%"
            maxW="container.lg"
            mx="auto"
            pos="relative"
            transform="auto"
            translateY={{ base: "3vh", md: "3vh" }}
          >
            <CenterMotion
              ref={textRef}
              animate={{
                opacity: isTextInView ? 1 : 0,
                y: isTextInView ? "0%" : "10%",
              }}
              h="full"
              initial={{ opacity: 0, y: "10%" }}
              transition={{ duration: 0.5 }}
            >
              {scrollContent.map((item, index) => (
                <ScrollTextItem
                  key={item.id}
                  index={index}
                  item={item}
                  scrollInterval={scrollTextInterval}
                />
              ))}
            </CenterMotion>
          </Container>

          <Flex bottom={0} justify="center" pos="absolute" w="full">
            <DeviceFrame isSmallScreen={isSmallScreen}>
              <BoxMotion background="black" style={{ y }}>
                {scrollContent
                  .concat(scrollContentLastImage)
                  .map((item, index) => (
                    <ScrollImageItem
                      key={item.id}
                      height={frameHeight}
                      index={index}
                      isSmallScreen={isSmallScreen}
                      item={item}
                      scrollInterval={scrollImageInterval}
                    />
                  ))}
              </BoxMotion>
            </DeviceFrame>
          </Flex>
        </Box>
      </Box>
      <Center h="50vh" mt="20vh" pos="relative" w="full">
        <Link href="/digitalCV/id">
          <DiscoverButton>Find out more</DiscoverButton>
        </Link>
      </Center>
    </Box>
  );

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(
      value,
      [animationOrder.start, animationOrder.endOfDeviceFrameScroll],
      [0, -distance]
    );
  }
}

type DeviceFrameProps = {
  children: ReactNode;
  isSmallScreen?: boolean;
};

function DeviceFrame({ children, isSmallScreen = false }: DeviceFrameProps) {
  const device = isSmallScreen ? (
    <DeviceFrameset device="iPhone X">{children}</DeviceFrameset>
  ) : (
    <DeviceFrameset device="MacBook Pro">{children}</DeviceFrameset>
  );

  return (
    <Box
      scale={{ base: 0.5, md: 0.6, lg: 0.8 }}
      transform="auto"
      transformOrigin="bottom"
      translateY={{ base: "20vh", md: "20vh" }}
    >
      {device}
    </Box>
  );
}

type ScrollElementsProps = {
  scrollInterval: MotionValue<number>;
  item: ScrollItem;
  index: number;
};

function ScrollTextItem({ scrollInterval, item, index }: ScrollElementsProps) {
  const { rangeArray } = getScrollRange(index, scrollContent.length, 0.25);

  const initialOpacity = index === 0 ? 1 : 0;
  const endOpacity = index === scrollContent.length - 1 ? 1 : 0;
  const initialY = index === 0 ? 0 : 20;
  const endY = index === scrollContent.length - 1 ? 0 : -20;

  const opacity = useTransform(scrollInterval, rangeArray, [
    initialOpacity,
    1,
    1,
    endOpacity,
  ]);

  const y = useTransform(scrollInterval, rangeArray, [initialY, 0, 0, endY]);

  return (
    <SmallText
      key={item.id}
      color="gray"
      style={{ opacity, y, position: "absolute", maxWidth: "90%" }}
    >
      <Highlight query={item.highlightedText} styles={{ color: "white" }}>
        {item.text}
      </Highlight>
    </SmallText>
  );
}

type ScrollImageProps = ScrollElementsProps & {
  height: number;
  isSmallScreen?: boolean;
};

function ScrollImageItem({
  scrollInterval,
  height,
  item,
  index,
  isSmallScreen = false,
}: ScrollImageProps) {
  const isLast = index === scrollContent.length;

  const { start, end, step, rangeArray } = getScrollRange(
    index,
    scrollContent.length
  );

  const initialY = index === 0 ? "0%" : "-10%";

  const opacity = useTransform(
    scrollInterval,
    [start, end - step, end],
    [1, 1, 0]
  );
  const y = useTransform(scrollInterval, rangeArray, [
    initialY,
    "0%",
    "0%",
    "30%",
  ]);

  return (
    <VstackMotion
      key={item.id}
      h={`${height}px`}
      overflow="hidden"
      style={{
        y: isLast ? "0%" : y,
        opacity,
      }}
    >
      <ChakraNextImage
        alt="MikeIT web design of landing page for past clients"
        className="logoImg"
        mt={isLast ? height * (isSmallScreen ? 0.15 : 0.09) : "0"}
        objectFit="contain"
        src={isSmallScreen ? item.image.mobile : item.image.desktop}
        priority
      />
    </VstackMotion>
  );
}
