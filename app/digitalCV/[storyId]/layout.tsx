"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { BoxMotion } from "@/app/components/motion";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  const transition = { duration: 0.6, ease: "easeInOut" };

  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" onExitComplete={() => console.log("sm")}>
      <BoxMotion
        key={pathname}
        animate={inTheCenter}
        exit={onTheRight}
        h="fullHeight"
        initial={onTheRight}
        left={0}
        pos="fixed"
        top={0}
        transition={transition}
        w="full"
        zIndex={10}
      >
        {children}
      </BoxMotion>
    </AnimatePresence>
  );
}
