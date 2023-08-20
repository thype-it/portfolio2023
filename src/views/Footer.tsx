import {
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { ReactComponent as Facebook } from "../media/icons/facebook.svg";
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
            <Link _hover={{ fill: "red !important" }}>
              <Facebook />
            </Link>
            <Image _hover={{ cursor: "not-allowed" }} src={figma} />
            <Image src={github} />
            <Image src={linkedin} />
          </HStack>
        </Flex>
      </Container>
      <Center color="gray" pb="7">
        <Text fontWeight="400">MIKE iIT © 2023 - All rights reserved</Text>
      </Center>
    </VStack>
  );
}
