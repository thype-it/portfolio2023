import {
  Badge,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdArticle } from "react-icons/md";
import { MdBusiness } from "react-icons/md";

import {
  BoxMotion,
  HStackMotion,
  VstackMotion,
} from "../../../../components/motion";
import arrowDownWhite from "../../../../media/arrowDownWhite.svg";
import arrowDownWhiteSmall from "../../../../media/arrowDownWhiteSmall.svg";
import logoWhite from "../../../../media/logo/logo_white.svg";
import type { ScrollMotionProps } from "../../../../types";

type Props = ScrollMotionProps & {
  isSmallScreen?: boolean;
};

const zIndices = {
  front: 3,
  middle: 2,
  back: 1,
};

export default function MainContent({
  scale,
  opacity,
  wrapperOpacity,
  isSmallScreen = false,
}: Props) {
  const desktopVersion = (
    <>
      <VStack
        className="fadeIn"
        justify="center"
        overflow="hidden"
        zIndex={zIndices.middle}
      >
        <ButtonLeft opacity={opacity} />
      </VStack>

      <VstackMotion
        flex={1}
        pb={10}
        pt="10vh"
        style={{ opacity: wrapperOpacity }}
        zIndex={zIndices.middle}
      >
        <Logo scale={scale} />
        <Slogan opacity={opacity} />
        <Spacer />
        <ArrowDown opacity={opacity} scale={scale} src={arrowDownWhite} />
      </VstackMotion>

      <VStack
        className="fadeIn"
        justify="center"
        overflow="hidden"
        zIndex={zIndices.middle}
      >
        <ButtonRight opacity={opacity} />
      </VStack>
    </>
  );

  const baseVersion = (
    <VstackMotion
      pt={{ base: "5vh", md: "10vh" }}
      style={{ opacity: wrapperOpacity }}
      w="full"
      zIndex={zIndices.middle}
    >
      <Logo scale={scale} />
      <VStack spacing="10" w="full">
        <Slogan opacity={opacity} />
        <HStack w="full">
          <ButtonLeft opacity={opacity} />
          <ButtonRight opacity={opacity} />
        </HStack>
        <ArrowDown opacity={opacity} scale={scale} src={arrowDownWhiteSmall} />
      </VStack>
    </VstackMotion>
  );

  return <>{isSmallScreen ? baseVersion : desktopVersion}</>;
}

function ArrowDown({
  opacity,
  scale,
  src,
}: { src: string } & ScrollMotionProps) {
  return (
    <VStack className="fadeIn" spacing="4">
      <BoxMotion style={{ scale }}>
        <Badge>Digital CV</Badge>
      </BoxMotion>
      <BoxMotion style={{ opacity }}>
        <Image boxSize="initial" objectFit="contain" src={src} />
      </BoxMotion>
    </VStack>
  );
}

function Slogan({ opacity }: ScrollMotionProps) {
  return (
    <HStackMotion className="fadeInFirst" style={{ opacity }}>
      <Text color="gray">I build</Text>
      <Badge>Websites</Badge> <Badge>Apps</Badge> <Badge>Designs</Badge>
    </HStackMotion>
  );
}

function Logo({ scale }: ScrollMotionProps) {
  return (
    <BoxMotion style={{ scale }} textAlign="center">
      <Image
        boxSize={{ base: "50vw", md: "30vw", xl: "20vw" }}
        className="logoImg"
        objectFit="contain"
        src={logoWhite}
      />
      <Text
        className="logoText"
        color="white"
        fontSize={{ base: "10vw", md: "5vw", xl: "3.5vw" }}
        variant="logo"
      >
        MIKE IT
      </Text>
    </BoxMotion>
  );
}

function ButtonWrapper({
  children,
  opacity,
}: { children: ReactNode } & ScrollMotionProps) {
  return (
    <HStackMotion
      gap={0}
      maxW={{ base: "50%", xl: "100%" }}
      overflow="hidden"
      style={{ opacity }}
    >
      {children}
    </HStackMotion>
  );
}

function ButtonLeft({ opacity }: ScrollMotionProps) {
  return (
    <ButtonWrapper opacity={opacity}>
      <Divider
        borderColor="gray.500"
        opacity={1}
        w={{ base: "50vw", xl: "13vw" }}
      />
      <Button
        minWidth="fit-content"
        rightIcon={<Icon as={MdArticle} />}
        size="sm"
        variant="outline"
      >
        Blog
      </Button>
    </ButtonWrapper>
  );
}

function ButtonRight({ opacity }: ScrollMotionProps) {
  return (
    <ButtonWrapper opacity={opacity}>
      <Button
        minWidth="fit-content"
        rightIcon={<Icon as={MdBusiness} />}
        size="sm"
        variant="outline"
      >
        Portfolio
      </Button>
      <Divider
        borderColor="gray.500"
        opacity={1}
        size="0.1"
        w={{ base: "50vw", xl: "13vw" }}
      />
    </ButtonWrapper>
  );
}
