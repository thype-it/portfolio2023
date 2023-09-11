import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

import ContentDrawer from "../../../components/ContentDrawer";
import DiscoverButton from "../../../components/DiscoverButton";
import { FlexMotion } from "../../../components/motion";
import banarunBgPhone from "../../../media/bgImages/banarunBg-phone.png";
import banarunBg from "../../../media/bgImages/banarunBg.png";
import muniMacBgPhone from "../../../media/bgImages/muniMacBg-phone.jpg";
import muniMacBg from "../../../media/bgImages/muniMacBg.jpg";

const content = {
  thype: {
    title: "Number 1 spot for month",
    text: "As a ceeo of my company I strived to make my team better in every way. I was able to achieve this by making sure that my team was in the best possible position to succeed. I was able to achieve this by making sure that my team was in the best possible position to succeed.",
  },
};

export default function ExperienceOthersSection() {
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
          isAnimationVertical={!isSmallScreen}
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
          <Image
            mt="auto"
            objectFit="contain"
            src={isSmallScreen ? muniMacBgPhone : muniMacBg}
          />
        </ContentBox>
      </Container>
    </Box>
  );
}

type ContentBoxProps = {
  children?: ReactNode;
  contentDrawer?: ReactNode;
  title: string;
  text: string;
  isInverted?: boolean;
  isSmallScreen?: boolean;
  isAnimationVertical?: boolean;
};

function ContentBox({
  children,
  title,
  text,
  contentDrawer,
  isInverted = false,
  isSmallScreen = false,
  isAnimationVertical = false,
}: ContentBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const translate = isInView ? "0%" : "20%";
  const x = !isAnimationVertical ? translate : "0%";
  const y = isAnimationVertical ? translate : "0%";
  const opacity = isInView ? 1 : 0;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pb={{ base: 8, md: 10, lg: 20 }}>
      <Flex
        ref={ref}
        bg={isInverted ? "customGray" : "black"}
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
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
              <DiscoverButton
                isInverted={isInverted}
                mt="auto"
                onPress={onOpen}
              />
            )}
          </VStack>
        </Box>
        <FlexMotion
          animate={{ x, y, opacity }}
          pos="relative"
          transition={{
            duration: 0.6,
            opacity: { duration: 0.4 },
          }}
          w={{ base: "100%", md: "50%" }}
        >
          {children}
        </FlexMotion>
        {isSmallScreen && (
          <DiscoverButton
            isInverted={isInverted}
            mb="5"
            mx="auto"
            onPress={onOpen}
          />
        )}
      </Flex>
      <ContentDrawer isOpen={isOpen} onClose={onClose}>
        {contentDrawer}
      </ContentDrawer>
    </Box>
  );
}
