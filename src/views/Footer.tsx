import {
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import ButtonAnimationWrapper from "../components/ButtonAnimationWrapper";
import facebook from "../media/icons/facebook.svg";
import figma from "../media/icons/figma.svg";
import github from "../media/icons/github.svg";
import linkedin from "../media/icons/linkedin.svg";

type Props = {};

export default function Footer({}: Props) {
  return (
    <VStack bg="black" color="white" pos="relative">
      <Container maxW="container.xl">
        <Flex
          color="white"
          direction={{ base: "column", md: "row" }}
          gap={{ base: "4", md: "10" }}
          justify="space-between"
          p={{ base: "6", md: "10" }}
          w="full"
        >
          <Heading
            fontFamily="Oooh Baby"
            size="xl"
            textAlign={{ base: "center", md: "left" }}
          >
            „Lifetime spend achieving your dreams is worth living.”
          </Heading>
          <HStack
            maxW="fit-content"
            mx={{ base: "auto", md: "0" }}
            spacing="4"
            w="100%"
          >
            <SocialsWrapper
              href="https://www.facebook.com/michal.illit"
              imageSrc={facebook}
            />
            <SocialsWrapper imageSrc={figma} disabled />
            <SocialsWrapper
              href="https://github.com/thype-it"
              imageSrc={github}
            />
            <SocialsWrapper
              href="https://www.linkedin.com/in/michael-illit-2997a8221/"
              imageSrc={linkedin}
            />
          </HStack>
        </Flex>
      </Container>
      <Center color="gray" pb="7">
        <Text fontWeight="400">MIKE IT © 2023 - All rights reserved</Text>
      </Center>
    </VStack>
  );
}

type SocialsProps = {
  children?: React.ReactNode;
  imageSrc: string;
  href?: string;
  disabled?: boolean;
};

function SocialsWrapper({
  children,
  imageSrc,
  href,
  disabled = false,
}: SocialsProps) {
  const isDisabled = disabled || !href;

  return (
    <ButtonAnimationWrapper>
      <Tooltip isDisabled={!isDisabled} label="comming son" hasArrow>
        <Link
          cursor={isDisabled ? "not-allowed" : "pointer"}
          href={isDisabled ? undefined : href}
          isExternal
        >
          <Image src={imageSrc} />
          {children}
        </Link>
      </Tooltip>
    </ButtonAnimationWrapper>
  );
}
