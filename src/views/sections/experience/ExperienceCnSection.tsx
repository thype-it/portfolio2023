import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

import DiscoverButton from "../../../components/DiscoverButton";
import ImageBg from "../../../components/ImageBg";
import ContentContainer from "../../../components/layout/ContentContainer";
import { HighlightText, SmallText, TextBlock } from "../../../components/text";
import bratislavaBg from "../../../media/bgImages/bratislavaBg.jpg";
import ciklumPresent from "../../../media/bgImages/ciklumPresent.jpg";

type Props = {};

export default function ExperienceCnSection({}: Props) {
  return (
    <Box as="section" bg="black" pos="relative" w="full">
      <ImageBg height="100vh" initialOpacity={0.3} src={bratislavaBg}>
        <ContentContainer>
          <TextBlock
            title="Ciklum WE"
            topic={
              <>
                <Icon as={MdLocationPin} />
                Bratislava
              </>
            }
          >
            I was working as a React / React Native developer. I was part of 3
            projects working with over 100 people. My last project was a react
            native application for Interflex.
          </TextBlock>
        </ContentContainer>
      </ImageBg>
      <Box mx="auto" transform="auto" translateY="-30%" w="85%">
        <ImageBg height="80vh" src={ciklumPresent}>
          <VStack h="full" justify="flex-end" maxW="md" ml={10}>
            <SmallText>
              During my time I also attended multiple Educational events and
              lorem ipsum
            </SmallText>
          </VStack>
        </ImageBg>
      </Box>
      <Flex direction={{ base: "column", md: "row" }} mx="auto" w="80%">
        <Box w={{ base: "100%", md: "50%" }}>
          <SmallText>
            I was working as a React / React Native developer. I was part of 3
            projects working with over 100 people. My last project was a react
            native application for Interflex.
          </SmallText>
        </Box>
        <Center w={{ base: "100%", md: "50%" }}>
          <DiscoverButton>Discover more</DiscoverButton>
        </Center>
      </Flex>
    </Box>
  );
}
