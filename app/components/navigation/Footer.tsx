"use client";

import {
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import ButtonAnimationWrapper from "../ButtonAnimationWrapper";
import { ChakraNextImage } from "../media";

type SocialsProps = {
  imageSrc: string;
  alt: string;
  href?: string;
  disabled?: boolean;
};

const SocialsList: SocialsProps[] = [
  {
    imageSrc: "/media/icons/facebook.svg",
    alt: "Facebook media icon",
    href: "https://www.facebook.com/michal.illit",
  },
  {
    imageSrc: "/media/icons/figma.svg",
    alt: "Figma media icon",
    disabled: true,
  },
  {
    imageSrc: "/media/icons/github.svg",
    alt: "Github media icon",
    href: "https://github.com/thype-it",
  },
  {
    imageSrc: "/media/icons/linkedin.svg",
    alt: "Linkedin media icon",
    href: "https://www.linkedin.com/in/michael-illit-2997a8221/",
  },
];

export default function Footer() {
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
            size="xl"
            textAlign={{ base: "center", md: "left" }}
            variant="quote"
          >
            „Lifetime spend achieving your dreams is worth living.”
          </Heading>
          <HStack
            maxW="fit-content"
            mx={{ base: "auto", md: "0" }}
            spacing="4"
            w="100%"
          >
            {SocialsList.map((social) => (
              <SocialsWrapper key={social.alt} {...social} />
            ))}
          </HStack>
        </Flex>
      </Container>
      <Center color="gray" pb="7">
        <Text fontWeight="400">MIKE IT © 2023 - All rights reserved</Text>
      </Center>
    </VStack>
  );
}

function SocialsWrapper({
  imageSrc,
  href,
  alt,
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
          <ChakraNextImage alt={alt} height={12} src={imageSrc} width={12} />
        </Link>
      </Tooltip>
    </ButtonAnimationWrapper>
  );
}
