"use client";
import { Box, Center } from "@chakra-ui/react";

import { ChakraNextImage } from "../components/media";

import logoWhite from "@/public/media/logo/logo_white.svg";

export default function Loading() {
  return (
    <Center
      bg="gray"
      h="100vh"
      left={0}
      overflow="hidden"
      pos="relative"
      position="fixed"
      top={0}
      w="100vw"
      zIndex={30}
      // bgGradient="linear(to-b, #271F2E 0%, #0B3948 100%)"
    >
      <Box bg="black" borderRadius="5rem" p="5" pos="relative">
        <ChakraNextImage
          alt="White MikeIt Logo"
          boxSize="20vw"
          objectFit="contain"
          src={logoWhite}
        />
      </Box>
    </Center>
  );
}
