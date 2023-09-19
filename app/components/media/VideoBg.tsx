import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
};

export default function VideoBg({ src }: Props) {
  return (
    <Box height="100%" left="0" position="absolute" top="0" width="100%">
      <video
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} />
      </video>
    </Box>
  );
}
