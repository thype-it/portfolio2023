"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { BoxMotion } from "@/app/components/motion";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const onTheRight = { x: "50%", opacity: 0 };
  const inTheCenter = { x: 0, opacity: 1 };
  const transition = { duration: 0.6, ease: "easeInOut" };

  const pathname = usePathname();

  return (
    <AnimatePresence>
      <BoxMotion
        key={pathname}
        animate={inTheCenter}
        h="fullHeight"
        initial={onTheRight}
        left={0}
        pos="fixed"
        top={0}
        transition={transition}
        w="full"
      >
        {children}
      </BoxMotion>
    </AnimatePresence>
  );
}
