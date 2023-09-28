"use client";

import { ChakraProps } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { BoxMotion } from "./motion";

type Props = ChakraProps & {
  children: ReactNode;
  variant: "right" | "left";
};

function PageTransitionWrapper({ children, variant, ...rest }: Props) {
  const onTheSide = { x: getSide(variant), opacity: 0 };
  const inTheCenter = { x: 0, opacity: 1 };
  const transition = { duration: 0.6, ease: "easeInOut" };

  const pathname = usePathname();

  return (
    <AnimatePresence>
      <BoxMotion
        key={pathname}
        animate={inTheCenter}
        initial={onTheSide}
        transition={transition}
        {...rest}
      >
        {children}
      </BoxMotion>
    </AnimatePresence>
  );
}

function getSide(variant: Props["variant"]) {
  switch (variant) {
    case "left":
      return "-50%";
    case "right":
      return "50%";
  }
}

export function PageTransitionWrapperLeft({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageTransitionWrapper variant="left">{children}</PageTransitionWrapper>
  );
}

export function PageTransitionWrapperRight({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageTransitionWrapper
      h="fullHeight"
      left={0}
      pos="fixed"
      top={0}
      variant="right"
      w="full"
    >
      {children}
    </PageTransitionWrapper>
  );
}
