import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import NextLink from "next/link";
import { ReactNode, useRef } from "react";

import { DiscoverButton } from "@/app/components";
import { ChakraNextImage } from "@/app/components/media";
import { FlexMotion } from "@/app/components/motion";
import banarunBgPhone from "@/public/media/bgImages/banarunBg-phone.png";
import banarunBg from "@/public/media/bgImages/banarunBg.png";
import muniMacBgPhone from "@/public/media/bgImages/muniMacBg-phone.jpg";
import muniMacBg from "@/public/media/bgImages/muniMacBg.jpg";

const content = {
  thype: {
    title: "Number 1 spot for month",
    text: `
        During the pandemic, alongside a team of like-minded individuals, 
        we created a mobile game available on the App Store and Google Play. 
        It quickly rose to the number 1 spot in the Casual and Action categories 
        in our region, maintaining a top 3 position in the free games chart on the App Store for several weeks.
    `,
  },
  muni: {
    title: "Computer science foundation",
    text: `
    During my participation in an applied science program, 
    I established a foundational understanding of computer 
    operation. I was introduced to programming concepts using Boolean 
    algebra and languages like Python and C. Additionally, I explored 
    diverse topics, such as interpreting punched cards, introductory courses 
    in relational algebra and MySQL, and algorithm complexity.
     My education was further enriched by completing 
    numerous courses dedicated to specific technologies, enabling me to acquire valuable 
    hands-on experience and enhance my expertise.
    `,
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
            <ChakraNextImage
              alt="Banarun game screenshot"
              boxSize="100%"
              ml="auto"
              objectFit="contain"
              src={banarunBgPhone}
            />
          ) : (
            <ChakraNextImage
              alt="Banarun game screenshot"
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
          text={content.muni.text}
          title={content.muni.title}
        >
          <ChakraNextImage
            alt="Macbook with Masaryk University logo badge on the back."
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
              <Link as={NextLink} href="/digitalCV/id" mt="auto">
                <DiscoverButton isInverted={isInverted} />
              </Link>
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
          <Link as={NextLink} href="/digitalCV/id" mx="auto">
            <DiscoverButton isInverted={isInverted} mb="5" />
          </Link>
        )}
      </Flex>
    </Box>
  );
}
