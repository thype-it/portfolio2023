import {
  AbsoluteCenter,
  Box,
  ChakraProps,
  Container,
  Divider,
  Flex,
  Heading,
  Tag,
  VStack,
  theme,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { BoxMotion } from "../../components/motion";
import type { ScrollMotionProps } from "../../types";

// text content:
const content = {
  frontend: [
    "HTML",
    "CSS3",
    "SCSS(SASS)",
    "CSS-in-JS",
    "JavaScript(ES6+)",
    "TypeScript",
    "Webpack",
    "jQuery",
    "Responsive Design",
  ],
  frameworks: [
    "React",
    "React Native",
    "React Query",
    "React Hook Form",
    "React Router",
    "Redux",
    "Next.js",
    "i18next ",
  ],
  frameworksStyle: [
    "Chakra UI",
    "Ant Design",
    "Styled Components",
    "Emotion",
    "Storybook",
    "Framer Motion",
  ],
  backend: ["MongoDB", "REST API", "SQL"],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Figma Prototyping",
    "EsLint",
    "Prettier",
    "Lottie",
  ],
};

export default function SkillsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const isMiddleScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: false,
  });

  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 1.7]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const boxSpacing = { base: "4", md: "8", lg: "12" };

  return (
    <Box ref={targetRef} as="section" bg="black" pos="relative" w="full">
      <Box
        h={{ base: "370vh", md: "240vh", xl: "220vh" }}
        left={0}
        overflow="hidden"
        pos="sticky"
        py="20"
        top={0}
      >
        <AbsoluteCenter h="full" w="full">
          <Container
            maxW={{ base: "full", md: "container.lg", xl: "container.xl" }}
            p={0}
            pos="relative"
            pt="50vh"
            w={{ base: "90%", md: "90%", lg: "full" }}
          >
            <VStack px={boxSpacing} spacing={boxSpacing} w="full">
              <Heading color="gray" mb="16" size="3xl">
                Technologies
              </Heading>
              {isMiddleScreen && (
                <SkillsBlock skills={content.frontend} title="Web Frontend" />
              )}
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                gap={boxSpacing}
                w="full"
              >
                {!isMiddleScreen && (
                  <SkillsBlock skills={content.frontend} title="Web Frontend" />
                )}
                <SkillsBlock skills={content.frameworks} title="Frameworks" />
                <SkillsBlock skills={content.backend} title="Web Backend" />
              </Flex>
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                gap={boxSpacing}
                w="full"
              >
                <SkillsBlock
                  skills={content.frameworksStyle}
                  title="Styling Frameworks"
                />
                <SkillsBlock skills={content.tools} title="Tools" />
              </Flex>
            </VStack>
          </Container>
        </AbsoluteCenter>
      </Box>
    </Box>
  );
}

type BlockProps = ScrollMotionProps & {
  skills: string[];
  title: string;
};

function SkillsBlock({ skills, title, opacityMotion }: BlockProps) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -25% 0px" });

  // animation props:
  const boxShadows = {
    initial: `inset 0 0 60px 14px ${theme.colors.whiteAlpha[500]}, 0 0 0px 0px ${theme.colors.whiteAlpha[500]}`,
    animate: `inset 0 0 0px 0px ${theme.colors.whiteAlpha[500]},  0 0 15px 4px ${theme.colors.whiteAlpha[500]}`,
  };
  const opacity = isInView ? 1 : 0;
  const boxShadow = isInView ? boxShadows.animate : boxShadows.initial;

  return (
    <BoxMotion
      ref={ref}
      animate={{ boxShadow, opacity }}
      bg="#black"
      borderRadius={{ base: "lg", md: "2xl" }}
      h="auto"
      mb={{ base: "10", md: 0 }}
      minW="52"
      p="7"
      transition={{ duration: 0.5 }}
    >
      <Heading color="highlight.green.500" mb="5" ml="2" size="lg">
        {title}
      </Heading>
      {isSmallScreen && <Divider mb="5" />}
      <BoxMotion
        animate={{ opacity }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {isSmallScreen ? (
          <BlockContent skills={skills} />
        ) : (
          <Box
            border={`5px dotted ${theme.colors.whiteAlpha[500]}`}
            borderRadius={{ base: "lg", md: "2xl" }}
            p="5"
            pb="3"
          >
            <BlockContent skills={skills} />
          </Box>
        )}
      </BoxMotion>
    </BoxMotion>
  );
}

function BlockContent({ skills }: ChakraProps & { skills: string[] }) {
  return (
    <Box>
      {skills.map((skill) => (
        <Tag
          key={skill}
          boxShadow="0 0 6px 2px rgba(255,255,255,0.4)"
          mb="3"
          mr="3"
        >
          {skill}
        </Tag>
      ))}
    </Box>
  );
}
