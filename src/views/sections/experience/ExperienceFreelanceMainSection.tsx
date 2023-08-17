import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { DeviceFrameset } from "react-device-frameset";

import DiscoverButton from "../../../components/DiscoverButton";
import { BoxMotion } from "../../../components/motion";
import { SmallText } from "../../../components/text";
import ferraraWeb from "../../../media/oldWebs/ferrara.png";

type Props = {};

export default function ExperienceFreelanceMainSection({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 800);

  return (
    <Box bg="black" pos="relative">
      <Box
        ref={targetRef}
        as="section"
        bg="black"
        h="800vh"
        pos="relative"
        w="full"
      >
        <Box h="100vh" left={0} pos="sticky" top={0} w="full">
          <SmallText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ut
            soluta quod id molestiae saepe cumque in totam. Repellat expedita ea
            beatae eveniet, voluptas numquam quidem facilis aliquid! Natus,
            dolorem.
          </SmallText>

          <Flex bottom={0} justify="center" pos="absolute" w="full">
            <DeviceFrame>
              <BoxMotion style={{ y }}>
                <Image
                  //   boxSize="20vw"
                  className="logoImg"
                  objectFit="contain"
                  src={ferraraWeb}
                />
              </BoxMotion>
            </DeviceFrame>
          </Flex>
        </Box>
      </Box>
      <Center
        // mt="40vh" pb="10vh"
        h="50vh"
        mt="20vh"
        pos="relative"
        w="full"
      >
        <DiscoverButton>Find out more</DiscoverButton>
      </Center>
    </Box>
  );

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0.1, 0.3], [0, -distance]);
  }
}

type DeviceFrameProps = {
  children: ReactNode;
};

function DeviceFrame({ children }: DeviceFrameProps) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const device = isSmallScreen ? (
    <DeviceFrameset device="iPhone X">{children}</DeviceFrameset>
  ) : (
    <DeviceFrameset device="MacBook Pro">{children}</DeviceFrameset>
  );

  return (
    <Box
      scale={{ base: 0.5, md: 0.6, lg: 0.8 }}
      transform="auto"
      transformOrigin="bottom"
      translateY={{ base: "10vh", md: "10%" }}
    >
      {device}
    </Box>
  );
}
