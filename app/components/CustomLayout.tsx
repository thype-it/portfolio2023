"use client";

import { ReactNode } from "react";

import { Footer } from "../components/navigation";
import { AboutMainSection } from "../digitalCV/components";

type Props = {
  children: ReactNode;
};

export default function CustomLayout({ children }: Props) {
  return (
    <>
      {children}
      <AboutMainSection />
      <Footer />
    </>
  );
}
