import {
  Box,
  Center,
  Container,
  Flex,
  Highlight,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { DeviceFrameset } from "react-device-frameset";

import ContentDrawer from "../../../components/ContentDrawer";
import DiscoverButton from "../../../components/DiscoverButton";
import ContentContainer from "../../../components/layout/ContentContainer";
import { BoxMotion, VstackMotion } from "../../../components/motion";
import { SmallText, TextBlock } from "../../../components/text";
import logoWhite from "../../../media/logo/logo_white.svg";
import ferraraWeb from "../../../media/oldWebs/ferrara.png";
import jovineckyWeb from "../../../media/oldWebs/jovinecky.png";
import ferraraWebPhone from "../../../media/oldWebs/mobile/ferrara.jpg";
import jovineckyWebPhone from "../../../media/oldWebs/mobile/jovinecky.jpg";
import thypeWebPhone from "../../../media/oldWebs/mobile/thype.jpg";
import thypeWeb from "../../../media/oldWebs/thype.png";

//text content:
const content = {
  hero: {
    topic: `Experience`,
    title: `Freelance carier. Satisfied clients. Managing small projects.`,
    text: `

    I've had the opportunity to work on numerous websites, both independently
     and collaboratively. Additionally, I engage in small-scale pet projects
      with other enthusiastic developers.
    
    `,
  },
};
//variables:
const scrollContent = [
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
    text: `Most of these projects involved building websites from scratch, 
    utilizing technologies such as Sass, CSS3 animations,
    JavaScript observers, and jQuery.`,
    highlightedText: "building websites from scratch",
    image: {
      desktop: jovineckyWeb,
      mobile: jovineckyWebPhone,
    },
  },
  {
    id: 3,
    text: `I'm currently focused on complex web and mobile app development. 
    My previous web projects provided me with invaluable experience.`,
    highlightedText: "invaluable experience",
    image: {
      desktop: thypeWeb,
      mobile: thypeWebPhone,
    },
  },
];

const scrollContentBottom = {
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
  start: 0.05, //start of device frame and text scrolling
  endOfTextScroll: 0.6, //end of text scrolling
  endOfDeviceFrameScroll: 0.7, //end of device frame scrolling
};

export default function ExperienceFreelanceMainSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Center h="full">
              <ScrollText scrollInterval={scrollTextInterval} />
            </Center>
          </Container>

          <Flex bottom={0} justify="center" pos="absolute" w="full">
            <DeviceFrame isSmallScreen={isSmallScreen}>
              <BoxMotion background="black" style={{ y }}>
                <ScrollImage
                  height={frameHeight}
                  isSmallScreen={isSmallScreen}
                  scrollInterval={scrollImageInterval}
                />
              </BoxMotion>
            </DeviceFrame>
          </Flex>
        </Box>
      </Box>
      <Center h="50vh" mt="20vh" pos="relative" w="full">
        <DiscoverButton onPress={onOpen}>Find out more</DiscoverButton>
      </Center>
      <ContentDrawer isOpen={isOpen} onClose={onClose} />
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
};

function ScrollText({ scrollInterval }: ScrollElementsProps) {
  return (
    <>
      {scrollContent.map((item, index) => {
        const { rangeArray } = getScrollRange(
          index,
          scrollContent.length,
          0.25
        );

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
        const y = useTransform(scrollInterval, rangeArray, [
          initialY,
          0,
          0,
          endY,
        ]);

        return (
          <SmallText
            key={item.id}
            color="gray"
            style={{ opacity, y, position: "absolute", maxWidth: "95%" }}
          >
            <Highlight query={item.highlightedText} styles={{ color: "white" }}>
              {item.text}
            </Highlight>
          </SmallText>
        );
      })}
    </>
  );
}

type ScrollImageProps = ScrollElementsProps & {
  height: number;
  isSmallScreen?: boolean;
};

function ScrollImage({
  scrollInterval,
  height,
  isSmallScreen = false,
}: ScrollImageProps) {
  const extraScrollContent = scrollContent.concat(scrollContentBottom);

  return (
    <>
      {extraScrollContent.map((item, index) => {
        const isLast = index === extraScrollContent.length - 1;

        const { start, end, step, rangeArray } = getScrollRange(
          index,
          scrollContent.length,
          0.5
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
            <Image
              className="logoImg"
              mt={isLast ? height * (isSmallScreen ? 0.15 : 0.09) : "0"}
              objectFit="contain"
              src={isSmallScreen ? item.image.mobile : item.image.desktop}
            />
          </VstackMotion>
        );
      })}
    </>
  );
}

function getScrollRange(
  index: number,
  length: number,
  stepFraction: number = 1
) {
  const start = index / length;
  const end = (index + 1) / length;
  const step = (end - start) * stepFraction;
  const rangeArray = [start, start + step, end - step, end];

  return {
    start,
    end,
    step,
    rangeArray,
  };
}
