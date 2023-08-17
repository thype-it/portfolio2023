import { Box } from "@chakra-ui/react";

import type { ScrollMotionProps } from "../types";

import { BoxMotion } from "./motion";

type Props = ScrollMotionProps & {
  height?: string;
  initialOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  children?: React.ReactNode;
  src: string;
};

export default function ImageBg({
  scale,
  opacity,
  src,
  children,
  height = "full",
  initialOpacity = 1,
}: Props) {
  const backgroundImage = `url(${src})`;

  return (
    <BoxMotion
      bg="black"
      h={height}
      pos="relative"
      style={{ scale, opacity }}
      w="full"
    >
      <Box
        bgImg={backgroundImage}
        bgPos="center"
        bgSize="cover"
        h="full"
        left={0}
        opacity={initialOpacity}
        pos="absolute"
        top={0}
        w="full"
      ></Box>
      {children}
    </BoxMotion>
  );
}
