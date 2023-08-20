import { Box, Button, Image, VStack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import DiscoverButton from "../../../../components/DiscoverButton";
import { BoxMotion } from "../../../../components/motion";
import { TextBlock } from "../../../../components/text";
import portrait from "../../../../media/portrait.png";

type Props = {};

const content = {
  topic: "About me",
  text: "I like Bla bla, motivets me bla a-nd drives my curiosity. I spend my days meeting new people and looking for oprtunities. I code I drinkm and I live.",
  title: "Hi, I'm Mike",
};

export default function AboutTextBase({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-30%"]);

  const imgOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const imgScale = useTransform(scrollYProgress, [0.6, 1], [1.3, 1]);

  const display = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["block", "block", "none"]
  );

  return (
    <Box ref={targetRef} h="250vh" pos="relative">
      <Box pos="sticky" pt="10" top={0}>
        <TextBlock title={content.title} topic={content.topic} isInverted>
          {content.text}
        </TextBlock>
        <VStack gap={0}>
          <BoxMotion
            style={
              {
                //   opacity: imgOpacity,
                //   scale: imgScale,
              }
            }
            w="full"
          >
            <Image
              boxSize="100%"
              className="logoImg"
              maxW="30rem"
              objectFit="contain"
              objectPosition="bottom"
              src={portrait}
            />
          </BoxMotion>
          <Box bg="white" boxShadow="0px 6px 81px 115px #fff" width="full">
            <Box mx="auto" transform="auto" translateY="-100%" w="max-content">
              <DiscoverButton isInverted />
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
