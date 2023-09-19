"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Heading,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import {
  scrollInfo,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { isBrowser } from "react-device-detect";

import ButtonAnimationWrapper from "../ButtonAnimationWrapper";
import { BoxMotion } from "../motion";

import { useScreenSize } from "@/lib";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const endPadding = 100; // for desktop only
const entryExitAnimationDuration = 400; //in milliseconds

export default function ContentDrawer({ isOpen, onClose, children }: Props) {
  const [containerElement, setContainerElement] = useState<HTMLElement>();
  const scrollProgress = useMotionValue(0);
  const [isClosing, setIsClosing] = useBoolean(false);
  const isDesktopDevice = isBrowser;
  const physicsProgress = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };
  const scaleX = useSpring(scrollProgress, physicsProgress);

  //desktop only variables
  const { width: viewportWidth } = useScreenSize();
  const [scrollRange, setScrollRange] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const physicsScrollX = { damping: 15, mass: 0.27, stiffness: 55 };
  const transformAmount = useTransform(
    scrollProgress,
    [0, 1],
    [0, -scrollRange]
  );
  const scrollX = useSpring(transformAmount, physicsScrollX);

  useEffect(() => {
    setIsClosing.off();

    requestAnimationFrame(() => {
      const containerElement = document.getElementById(
        "scrollerContainerContentDrawer"
      );

      if (isDesktopDevice) {
        containerRef.current &&
          setScrollRange(
            containerRef.current.scrollWidth - viewportWidth + endPadding
          );
      }
      containerElement && setContainerElement(containerElement);
    });
  }, [isOpen]);

  scrollInfo(
    (progress) =>
      scrollProgress.set(
        isDesktopDevice ? progress.y.progress : progress.x.progress
      ),
    {
      container: containerElement,
    }
  );

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      size="full"
      onClose={() => {
        setIsClosing.on();
        setTimeout(() => {
          onClose();
        }, entryExitAnimationDuration);
      }}
    >
      <DrawerOverlay />
      <DrawerContent background="transparent">
        <BoxMotion
          animate={{ x: isClosing ? "100%" : "0%" }}
          h="full"
          initial={{ x: "100%" }}
          transition={{
            type: "spring",
            bounce: 0.2,
            restDelta: 0.001,
            restSpeed: 0.001,
          }}
        >
          <DrawerBody
            background="gray.900"
            css={
              !isDesktopDevice && {
                "&::-webkit-scrollbar": {
                  // Chrome and Safari
                  display: "none",
                },
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // Internet Explorer/Edge
                overflow: "-moz-scrollbars-none", // Older Firefox
              }
            }
            h={isDesktopDevice ? "100vh" : "full"}
            id="scrollerContainerContentDrawer"
            overflowX={isDesktopDevice ? "hidden" : "auto"}
            pos="relative"
            py={0}
          >
            <BoxMotion
              ref={containerRef}
              alignItems="center"
              display="flex"
              gap={10}
              h={isDesktopDevice ? "100vh" : "full"}
              width="max-content"
              {...(isDesktopDevice
                ? {
                    pointerEvents: "none",
                    pos: "sticky",
                    style: { x: scrollX },
                    top: 0,
                  }
                : {})}
            >
              {children ? children : <PlaceHolder />}
            </BoxMotion>
            {isDesktopDevice && <Box h={scrollRange} />}
          </DrawerBody>
          <DrawerFooter pos="absolute" top={0} w="full">
            <HStack
              display="flex"
              margin="0 auto"
              maxW={740}
              spacing={5}
              w="80%"
            >
              <VStack flex={1} h={1} justify="center" pos="relative">
                <Box bg="gray.400" h="50%" w="full"></Box>
                <Box
                  bg="white"
                  h="full"
                  left={0}
                  pos="absolute"
                  top={0}
                  w={1}
                />
                <BoxMotion
                  bg="white"
                  h="full"
                  left={1}
                  pos="absolute"
                  style={{ scaleX }}
                  top={0}
                  transformOrigin="left"
                  w="full"
                ></BoxMotion>
              </VStack>
              <ButtonAnimationWrapper>
                <DrawerCloseButton
                  bg="white"
                  borderRadius={999}
                  color="black"
                  pos="static"
                  size="lg"
                />
              </ButtonAnimationWrapper>
            </HStack>
          </DrawerFooter>
        </BoxMotion>
      </DrawerContent>
    </Drawer>
  );
}

function PlaceHolder() {
  return (
    <>
      <VStack
        bg="black"
        color="white"
        h="400px"
        justify="center"
        maxW="80vw"
        p={10}
        w="600px"
      >
        <Heading size="4xl">This piece of content is beign prepared</Heading>
      </VStack>
      <VStack
        bg="white"
        color="black"
        h="300px"
        justify="center"
        maxW="80vw"
        p={10}
        w="600px"
      >
        <Heading size="4xl">Come back later 😎</Heading>
      </VStack>
    </>
  );
}
