import {
  AbsoluteCenter,
  Box,
  Container,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ImageBg from "../../components/ImageBg";
import ContentContainer from "../../components/layout/ContentContainer";
import { BoxMotion, CenterMotion } from "../../components/motion";
import skillsBg from "../../media/bgImages/skillsBg.jpg";
import type { ScrollMotionProps } from "../../types";

type Props = {};

export default function SkillsSection({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const boxSpacing = 10;

  return (
    <Box
      ref={targetRef}
      as="section"
      bg="black"
      h="170vh"
      pos="relative"
      w="full"
    >
      <Box h="100vh" left={0} overflow="hidden" pos="sticky" py={20} top={0}>
        <AbsoluteCenter h="full" opacity={0.6} w="full">
          <ImageBg opacity={opacity} scale={scale} src={skillsBg} />
        </AbsoluteCenter>
      </Box>
      <Container maxW="container.xl">
        <VStack
          h="100vh"
          mt="-50vh"
          px={boxSpacing}
          spacing={boxSpacing}
          w="full"
        >
          <HStack h="60%" spacing={boxSpacing} w="full">
            <Box h="full" w="60%">
              <SkillsBlock isBig />
            </Box>
            <Box h="full" w="40%">
              <VStack h="full" spacing={boxSpacing}>
                <SkillsBlock />
                <SkillsBlock />
              </VStack>
            </Box>
          </HStack>
          <HStack h="40%" spacing={boxSpacing} w="full">
            <Box h="full" w="40%">
              <SkillsBlock />
            </Box>
            <Box h="full" w="60%">
              <SkillsBlock />
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

type BlockProps = ScrollMotionProps & {
  isBig?: boolean;
};

function SkillsBlock({ opacity, isBig = false }: BlockProps) {
  return <Box bgColor="white" h="full" w="full"></Box>;
}
