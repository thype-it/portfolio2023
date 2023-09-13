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
  useToast,
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
  zIndices: {
    front: number;
    middle: number;
    back: number;
  };
};

export default function MainContent({
  scaleMotion: scale,
  opacityMotion: opacity,
  wrapperOpacityMotion: wrapperOpacity,
  zIndices,
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
        <ButtonLeft opacityMotion={opacity} />
      </VStack>

      <VstackMotion
        flex={1}
        pb={10}
        pt="10vh"
        style={{ opacity: wrapperOpacity }}
        zIndex={zIndices.middle}
      >
        <Logo scaleMotion={scale} />
        <Slogan opacityMotion={opacity} />
        <Spacer />
        <ArrowDown
          opacityMotion={opacity}
          scaleMotion={scale}
          src={arrowDownWhite}
        />
      </VstackMotion>

      <VStack
        className="fadeIn"
        justify="center"
        overflow="hidden"
        zIndex={zIndices.middle}
      >
        <ButtonRight opacityMotion={opacity} />
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
      <Logo scaleMotion={scale} />
      <VStack spacing="10" w="full">
        <Slogan opacityMotion={opacity} />
        <HStack w="full">
          <ButtonLeft opacityMotion={opacity} />
          <ButtonRight opacityMotion={opacity} />
        </HStack>
        <ArrowDown
          opacityMotion={opacity}
          scaleMotion={scale}
          src={arrowDownWhiteSmall}
        />
      </VStack>
    </VstackMotion>
  );

  return <>{isSmallScreen ? baseVersion : desktopVersion}</>;
}

function ArrowDown({
  opacityMotion: opacity,
  scaleMotion: scale,
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

function Slogan({ opacityMotion: opacity }: ScrollMotionProps) {
  return (
    <HStackMotion className="fadeInFirst" style={{ opacity }}>
      <Text color="gray">I build</Text>
      <Badge>Websites</Badge> <Badge>Apps</Badge> <Badge>Designs</Badge>
    </HStackMotion>
  );
}

function Logo({ scaleMotion: scale }: ScrollMotionProps) {
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
  opacityMotion: opacity,
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

function ButtonLeft({ opacityMotion: opacity }: ScrollMotionProps) {
  const toast = useToast();

  return (
    <ButtonWrapper opacityMotion={opacity}>
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
        onClick={() =>
          toast({
            title: "Blog comming soon",
            description: "This feature is still in development",
          })
        }
      >
        Blog
      </Button>
    </ButtonWrapper>
  );
}

function ButtonRight({ opacityMotion: opacity }: ScrollMotionProps) {
  const toast = useToast();

  return (
    <ButtonWrapper opacityMotion={opacity}>
      <Button
        minWidth="fit-content"
        rightIcon={<Icon as={MdBusiness} />}
        size="sm"
        variant="outline"
        onClick={() =>
          toast({
            title: "Porfolio comming soon",
            description: "This feature is still in development",
          })
        }
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
