import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import DiscoverButton from "../../../components/DiscoverButton";
import { TextBlock } from "../../../components/text";
import banarunBgPhone from "../../../media/bgImages/banarunBg-phone.png";
import banarunBg from "../../../media/bgImages/banarunBg.png";
import muniMacBg from "../../../media/bgImages/muniMacBg.jpg";

type Props = {};

const content = {
  thype: {
    title: "Number 1 spot for month",
    text: "As a ceeo of my company I strived to make my team better in every way. I was able to achieve this by making sure that my team was in the best possible position to succeed. I was able to achieve this by making sure that my team was in the best possible position to succeed.",
  },
};

export default function ExperienceOthersSection({}: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" bg="white" pos="relative" w="full">
      <Container
        bg="white"
        h="ful"
        maxW="container.xl"
        pos="relative"
        py={{ base: 8, md: 10, lg: 20 }}
      >
        <ContentBox
          isSmallScreen={isSmallScreen}
          text={content.thype.text}
          title={content.thype.title}
          isInverted
        >
          {isSmallScreen ? (
            <Image
              boxSize="100%"
              ml="auto"
              objectFit="contain"
              src={banarunBgPhone}
            />
          ) : (
            <Image
              justifySelf="center"
              maxH={500}
              mt="auto"
              mx="auto"
              objectFit="contain"
              pt={30}
              src={banarunBg}
            />
          )}
        </ContentBox>
        <ContentBox
          isSmallScreen={isSmallScreen}
          text={content.thype.text}
          title={content.thype.title}
        >
          <Image mt="auto" objectFit="contain" src={muniMacBg} />
        </ContentBox>
      </Container>
    </Box>
  );
}

type ContentBoxProps = {
  children?: ReactNode;
  title: string;
  text: string;
  isInverted?: boolean;
  isSmallScreen?: boolean;
};

function ContentBox({
  children,
  title,
  text,
  isInverted = false,
  isSmallScreen = false,
}: ContentBoxProps) {
  return (
    <Box pb={{ base: 8, md: 10, lg: 20 }}>
      <Flex
        bg={isInverted ? "customGray" : "black"}
        direction={{ base: "column", md: "row" }}
      >
        <Box p={{ base: 8, md: 10, lg: 20 }} w={{ base: "100%", md: "50%" }}>
          <VStack
            align="start"
            color={isInverted ? "black" : "white"}
            h="full"
            spacing={30}
          >
            <Heading as="h3" size="xl">
              {title}
            </Heading>
            <Text>{text}</Text>
            {!isSmallScreen && (
              <DiscoverButton isInverted={isInverted} mt="auto" />
            )}
          </VStack>
        </Box>
        <Flex pos="relative" w={{ base: "100%", md: "50%" }}>
          {children}
        </Flex>
        {isSmallScreen && <DiscoverButton isInverted={isInverted} />}
      </Flex>
    </Box>
  );
}
