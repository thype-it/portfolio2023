"use client";
import {
  AbsoluteCenter,
  Box,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { ChakraNextImage, VideoBg } from "@/app/components/media";
import logoWhite from "@/public/media/logo/logo_white.svg";
const videoSrc = "/media/video/backgroundVideo.mp4";
const videoPhoneSrc = "/media/video/backgroundVideoPhone.mp4";

export default function Hero() {
  return (
    <Box color="white" overflow="hidden" pos="relative">
      <AbsoluteCenter h="full" opacity={0.4} w="full" zIndex="hide">
        <VideoBg src={videoSrc} srcPhone={videoPhoneSrc} />
      </AbsoluteCenter>
      <VStack align="center" pb={4} pos="relative" pt={16}>
        <ChakraNextImage
          alt="White MikeIT logo"
          boxSize={{ base: "50vw", md: "30vw", xl: "20vw" }}
          objectFit="contain"
          src={logoWhite}
          priority
        />
        <Text
          fontSize={{ base: "10vw", md: "5vw", xl: "3.5vw" }}
          variant="logo"
        >
          MIKE IT
        </Text>
        <Text
          fontWeight="medium"
          maxW="90%"
          my={5}
          opacity={0.8}
          textAlign={{ base: "center", md: "left" }}
        >
          Hi, I&apos;m Mike, a software developer based in Australia. I enjoy
          building things for the web and mobile.
        </Text>
      </VStack>
      <Divider borderWidth="1px" opacity={1} />
      <Heading
        background="blackAlpha.500"
        py={{ base: 4, md: 8 }}
        textAlign="center"
      >
        Featured projects
      </Heading>
      <Divider borderWidth="1px" opacity={1} />
    </Box>
  );
}
