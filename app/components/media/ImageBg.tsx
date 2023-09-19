import { Box, ChakraProps, useBreakpointValue } from "@chakra-ui/react";

import { BoxMotion } from "../motion";

type Props = ChakraProps &
  ScrollMotionProps & {
    initialOpacity?:
      | 0
      | 0.1
      | 0.2
      | 0.3
      | 0.4
      | 0.5
      | 0.6
      | 0.7
      | 0.8
      | 0.9
      | 1;
    children?: React.ReactNode;
    src: string;
    srcPhone?: string;
  };

export default function ImageBg({
  scaleMotion: scale,
  opacityMotion: opacity,
  wrapperOpacityMotion,
  src,
  srcPhone = src,
  children,
  initialOpacity = 1,
  ...chakraProps
}: Props) {
  const isPhoneScreen = useBreakpointValue({ base: true, md: false });
  const backgroundImage = `url(${isPhoneScreen ? srcPhone : src})`;

  return (
    <BoxMotion
      bg="black"
      h="full"
      pos="relative"
      w="full"
      {...chakraProps}
      overflow="hidden"
    >
      <BoxMotion
        bgImg={backgroundImage}
        bgPos="center"
        bgSize="cover"
        h="full"
        left={0}
        pos="absolute"
        style={{ scale, opacity }}
        top={0}
        w="full"
      />
      <Box
        bg="black"
        h="full"
        left={0}
        opacity={1 - initialOpacity}
        pos="absolute"
        top={0}
        w="full"
      />
      {children}
    </BoxMotion>
  );
}
