import { Box, Center, Flex, Icon, VStack } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

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
    text: "I was working as a React / React Native developer. I was part of 3 projects working with over 100 people. My last project was a react native application for Interflex.",
  },
  subHeroText:
    "During my time I also attended multiple Educational events and lorem ipsum",
  discoverText:
    "During my time I also attended multiple Educational events and lorem ipsum",
};

export default function ExperienceCnSection() {
  return (
    <Box as="section" bg="black" pos="relative" w="full">
      <ImageBg height="100vh" initialOpacity={0.5} src={bratislavaBg}>
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
          <DiscoverButton />
        </Center>
      </Flex>
    </Box>
  );
}
