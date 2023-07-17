import {
  Box,
  Center,
  Flex,
  Heading,
  Highlight,
  Image,
  Input,
  Mark,
  Text,
  VStack,
  useHighlight,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { DeviceFrameset } from "react-device-frameset";

import Logo from "../../components/logo/Logo";
import logoGradient from "../../media/logo/logoGradient.svg";
import ferrara from "../../media/oldWebs/ferrara.png";
import portrait from "../../media/portraitTransp.png";

type Props = {};

export default function HomePage({}: Props) {
  const animationRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start end", "end"],
  });
  const scrollableValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  const chunks = useHighlight({
    text: "With the Highlight component, you can spotlight, emphasize and accentuate words instantly",
    query: ["spotlight", "emphasize", "accentuate", "instantly"],
  });

  const [something, setSomething] = useState("");

  return (
    <>
      <Flex
        ref={animationRef}
        h="100vh"
        justifyContent="center"
        m="100vh auto"
        w="full"
      >
        <VStack alignContent="center" justifyContent="center">
          <Heading size="4xl">Hi, my name is </Heading>
        </VStack>
        <Image src={logoGradient} />
        <motion.div style={{ translateX: scrollableValue }}>
          <Heading size="4xl">Mike Illit</Heading>
        </motion.div>
      </Flex>
      <Flex h="100vh" justifyContent="center" w="full">
        <VStack alignContent="center" justifyContent="center">
          <Heading>Hello my name is </Heading>
          <motion.div animate={{ x: 100 }} initial={false}>
            <Text variant="logo">MIKE IT</Text>
          </motion.div>
          <Heading lineHeight="tall">
            {chunks.map(({ match, text }) => {
              if (!match) return text;

              return text === "instantly" ? (
                <Box as="u" fontFamily="NewYork">
                  {text}
                </Box>
              ) : (
                <Mark
                  bg="black"
                  color="white"
                  fontFamily="NewYork"
                  px="2"
                  py="1"
                >
                  {text}
                </Mark>
              );
            })}
          </Heading>
        </VStack>
      </Flex>

      <Flex
        align="center"
        alignContent="center"
        alignItems="center"
        h="100vh"
        justifyContent="center"
        w="full"
      >
        <DeviceFrameset color="gold" device="iPhone X">
          <Image alt="Dan Abramov" src={ferrara} />
        </DeviceFrameset>
      </Flex>

      <Flex h="100vh" justifyContent="center" w="full">
        <VStack alignContent="center" justifyContent="center">
          <Box boxSize="sm">
            <Image alt="Dan Abramov" src={portrait} />
          </Box>
          <Logo />
        </VStack>
      </Flex>
      <Flex h="100vh" justifyContent="center" w="full">
        <VStack alignContent="center" justifyContent="center">
          <Input
            value={something}
            onChange={(e) => setSomething(e.target.value)}
          />
          <Highlight
            query={something}
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            The train leaves every morning at 6AM. She left her fuzzy slippers
            on the couch. I get on the bus. You didn’t tell me you wanted to
            come. Have a cigarette, won’t you? Wiggle your fingers!
          </Highlight>
        </VStack>
      </Flex>
    </>
  );
}
