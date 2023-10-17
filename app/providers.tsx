"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import {
  Montserrat,
  Montserrat_Alternates,
  Oooh_Baby,
  Roboto,
} from "next/font/google";

import theme from "./theme";

const LandscapeOverlay = dynamic(
  () => import("./components/LandscapeOverlay"),
  { ssr: false }
);

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});
const montserrat = Montserrat({ subsets: ["latin"] });
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const ooohBaby = Oooh_Baby({ subsets: ["latin"], weight: ["400"] });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style global jsx>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-montserratAlternates: ${montserratAlternates.style
              .fontFamily};
            --font-ooohBaby: ${ooohBaby.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
          <LandscapeOverlay />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
