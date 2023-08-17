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

{
  /*
    apple airpods video embedded.
  <video
  class="value-props-video"
  muted=""
  loop=""
  playsinline=""
  preload="none"
  data-inline-media-sources='{"large": { "1x": "large"}, "medium": { "1x": "medium"}, "small": { "1x": "small"}}'
  data-inline-media-basepath="/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/spatial-audio/"
  aria-label="Dancers moving expressively."
  src="/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/spatial-audio/small.mp4#t=4.355795"
></video>; */
}
