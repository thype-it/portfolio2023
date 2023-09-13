import {
  Box,
  Center,
  Flex,
  Icon,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MdLocationPin } from "react-icons/md";

import ContentDrawer from "../../../components/ContentDrawer";
import DiscoverButton from "../../../components/DiscoverButton";
import ImageBg from "../../../components/ImageBg";
import ContentContainer from "../../../components/layout/ContentContainer";
import { SmallText, TextBlock } from "../../../components/text";
import bratislavaBg from "../../../media/bgImages/bratislavaBg.jpg";
import ciklumPresent from "../../../media/bgImages/ciklumPresent.jpg";
import ciklumPresentPhone from "../../../media/bgImages/ciklumPresentPhone.jpg";

//text content:
const content = {
  hero: {
    title: "Ciklum WE",
    topic: "Bratislava",
    text: `
    As a React/React Native developer, I've actively contributed to three projects, 
    collaborating extensively within large teams. My latest project involved React 
    Native app development for Interflex.
    `,
  },
  subHeroText:
    "I've also had opportunities to participate in various educational events",
  discoverText: `

  I've gained a robust understanding of developing web and mobile applications using React and React Native, along 
  with the importance of effective teamwork. This includes clear idea articulation, the ability 
  to ask questions and proficiency in version control best practices, facilitating seamless 
  collaboration with fellow developers.
    `,
};

export default function ExperienceCnSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scaleImageBig = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const scaleImageSmall = useTransform(scrollYProgress, [0.2, 0.7], [1.15, 1]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box ref={targetRef} as="section" bg="black" pos="relative" w="full">
      <ImageBg
        height="100vh"
        initialOpacity={0.5}
        scaleMotion={scaleImageBig}
        src={bratislavaBg}
      >
        <ContentContainer>
          <TextBlock
            title={content.hero.title}
            topic={
              <>
                <Icon as={MdLocationPin} />
                {content.hero.topic}
              </>
            }
          >
            {content.hero.text}
          </TextBlock>
        </ContentContainer>
      </ImageBg>
      <Box mx="auto" transform="auto" translateY="-30%" w="85%">
        <ImageBg
          boxShadow="dark-lg"
          h={{ base: "60vh", md: "80vh" }}
          initialOpacity={0.6}
          scaleMotion={scaleImageSmall}
          src={ciklumPresent}
          srcPhone={ciklumPresentPhone}
        >
          <VStack h="full" justify="flex-end" maxW="md" ml={10}>
            <SmallText color="highlight.orange.500">
              {content.subHeroText}
            </SmallText>
          </VStack>
        </ImageBg>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "10", md: 0 }}
        mx="auto"
        w="80%"
      >
        <Box w={{ base: "100%", md: "50%" }}>
          <SmallText>{content.discoverText}</SmallText>
        </Box>
        <Center w={{ base: "100%", md: "50%" }}>
          <DiscoverButton onPress={onOpen} />
        </Center>
      </Flex>
      <ContentDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
