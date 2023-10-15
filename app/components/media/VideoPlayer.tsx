"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Props = {
  fallback?: JSX.Element;
  src: string;
};

export default function VideoPlayer({ fallback, src }: Props) {
  return (
    <Box pointerEvents="auto" w="full">
      <ReactPlayer
        fallback={fallback ? fallback : <Skeleton height="200px" />}
        url={src}
        width="100%"
        controls
      />
    </Box>
  );
}
