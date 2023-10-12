"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";

type Props = {
  src: string;
  srcPhone: string;
};

export default function VideoBg({ src, srcPhone }: Props) {
  return (
    <Box height="100%" left="0" position="absolute" top="0" width="100%">
      <video
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        autoPlay
        loop
        muted
        playsInline
      >
        {isMobile ? <source src={srcPhone} /> : <source src={src} />}
      </video>
    </Box>
  );
}
