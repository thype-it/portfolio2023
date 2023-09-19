import { Highlight } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";

import { TextMotion } from "../motion";

export enum HighlightTextVariant {
  Primary,
  Dimmed,
}

type HighlightTextProps = HTMLMotionProps<"div"> & {
  children: string;
  highlightText?: string;
  variant?: HighlightTextVariant;
  isSmall?: boolean;
};

export default function HighlightText({
  children,
  highlightText,
  variant = HighlightTextVariant.Primary,
  isSmall = false,
  ...rest
}: HighlightTextProps) {
  const { color, highlightColor } = getColors(variant);

  return (
    <TextMotion
      color={color}
      fontSize={
        isSmall ? { base: "3xl", md: "5xl" } : { base: "4xl", md: "6xl" }
      }
      fontWeight="bold"
      px={{ base: 0, md: 10, lg: 0 }}
      textAlign={isSmall ? "left" : "center"}
      w={isSmall ? { base: "full", md: "80%" } : { base: "75%", md: "full" }}
      {...rest}
      pos="relative"
    >
      {highlightText ? (
        <Highlight
          query={highlightText}
          styles={{
            color: highlightColor,
            whiteSpace: isSmall ? "normal" : "nowrap",
          }}
        >
          {children}
        </Highlight>
      ) : (
        children
      )}
    </TextMotion>
  );

  function getColors(variant: HighlightTextVariant) {
    switch (variant) {
      case HighlightTextVariant.Primary:
        return { color: "white", highlightColor: "highlight.green.500" };
      case HighlightTextVariant.Dimmed:
        return { color: "gray.400", highlightColor: "white" };
    }
  }
}
