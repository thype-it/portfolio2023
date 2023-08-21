import {
  Box,
  Center,
  Container,
  Flex,
  Highlight,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { DeviceFrameset } from "react-device-frameset";

import DiscoverButton from "../../../components/DiscoverButton";
import ContentContainer from "../../../components/layout/ContentContainer";
import { BoxMotion } from "../../../components/motion";
import { SmallText, TextBlock } from "../../../components/text";
import ferraraWeb from "../../../media/oldWebs/ferrara.png";
import jovineckyWeb from "../../../media/oldWebs/jovinecky.png";
import leafcareWeb from "../../../media/oldWebs/leaf.png";
import ferraraWebPhone from "../../../media/oldWebs/mobile/ferrara.png";
import jovineckyWebPhone from "../../../media/oldWebs/mobile/jovinecky.png";
import thypeWebPhone from "../../../media/oldWebs/mobile/thype.png";
import thypeWeb from "../../../media/oldWebs/thype.png";

//text content:
const content = {
  hero: {
    topic: `Experience`,
    title: `Freelance carier. Satisfied clients. Work solo or in small team`,
    text: `I ccan work solo but i know how to cooperate in big teams. The biggest project 
    I was a part of consisted of over 50 people working from multiple countries.`,
  },
  senctences: [
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Porro ut soluta quod id molestiae saepe cumque in totam.
    Repellat expedita ea beatae`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Porro ut soluta quod id molestiae saepe cumque in totam.
    Repellat expedita ea beatae`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Porro ut soluta quod id molestiae saepe cumque in totam.
    Repellat expedita ea beatae`,
  ],
};

const scrollImages = {
  desktop: [ferraraWeb, leafcareWeb, thypeWeb],
};

export default function ExperienceFreelanceMainSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useParallax(scrollYProgress, 1500);

  return (
    <Box bg="black" pos="relative">
      <ContentContainer>
        <TextBlock title={content.hero.title} topic={content.hero.topic}>
          {content.hero.text}
        </TextBlock>
      </ContentContainer>
      <Box
        ref={targetRef}
        as="section"
        bg="black"
        h="400vh"
        pos="relative"
        pt="20"
        w="full"
      >
        <Box h="100vh" left={0} pos="sticky" top={0} w="full">
          <Container
            h="40%"
            maxW="container.lg"
            mx="auto"
            transform="auto"
            translateY={{ base: "3vh", md: "3vh" }}
          >
            <Center h="full">
              <SmallText color="gray">
                <Highlight query="Lorem ipsum" styles={{ color: "white" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro ut soluta quod id molestiae saepe cumque in totam.
                  Repellat expedita ea beatae
                </Highlight>
              </SmallText>
            </Center>
          </Container>

          <Flex bottom={0} justify="center" pos="absolute" w="full">
            <DeviceFrame>
              <BoxMotion style={{ y }}>
                <BoxMotion h="1500px" overflow="hidden">
                  <Image
                    className="logoImg"
                    objectFit="contain"
                    src={ferraraWeb}
                  />
                </BoxMotion>
                <BoxMotion h="1500px" overflow="hidden">
                  <Image
                    className="logoImg"
                    objectFit="contain"
                    src={leafcareWeb}
                  />
                </BoxMotion>
              </BoxMotion>
            </DeviceFrame>
          </Flex>
        </Box>
      </Box>
      <Center
        // mt="40vh" pb="10vh"
        h="50vh"
        mt="20vh"
        pos="relative"
        w="full"
      >
        <DiscoverButton>Find out more</DiscoverButton>
      </Center>
    </Box>
  );

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0.05, 0.5], [0, -distance]);
  }
}

type DeviceFrameProps = {
  children: ReactNode;
};

function DeviceFrame({ children }: DeviceFrameProps) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

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

type ScrollOpacityTextProps = {
  scrollInterval: MotionValue<number>;
  imageSources: string[];
};

function ScrollImages({
  scrollInterval,
  imageSources,
}: ScrollOpacityTextProps) {
  return (
    <>
      {imageSources.map((source, index) => {
        return (
          <BoxMotion
            key={source}
            // style={{ y }}
          >
            <Image
              //   boxSize="20vw"
              className="logoImg"
              objectFit="contain"
              src={ferraraWeb}
            />
          </BoxMotion>
        );
      })}
    </>
  );

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0.1, 0.3], [0, -distance]);
  }
}

// function ScrollOpacityText({ scrollInterval }: ScrollOpacityTextProps) {
//   return (
//     <Container
//       maxW={{ base: "440px", md: "container.lg" }}
//       w={{ base: "86%", lg: "95%" }}
//     >
//       <Text
//         color="white"
//         fontSize={{ base: "1.9rem", md: "2.75rem", lg: "3.5rem" }}
//       >
//         {content.sentences.map((sentence, index) => {
//           const start = index / content.sentences.length;
//           const end = (index + 1) / content.sentences.length;
//           const step = (end - start) / 2;

//           return (
//             <motion.span
//               key={sentence}
//               style={{
//                 opacity: useTransform(
//                   scrollInterval,
//                   [start, start + step, end - step, end],
//                   [0.3, 1, 1, 0.3]
//                 ),
//               }}
//             >
//               {sentence}{" "}
//             </motion.span>
//           );
//         })}
//       </Text>
//     </Container>
//   );
// }
