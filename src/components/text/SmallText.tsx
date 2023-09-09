import { Text } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

import { TextMotion } from "../motion";

type Props = HTMLMotionProps<"div"> & {
  color?: string;
  children: ReactNode;
};

export function SmallText({ color = "white", children, ...rest }: Props) {
  return (
    <TextMotion
      color={color}
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="bold"
      pos="relative"
      py={6}
      {...rest}
    >
      {children}
    </TextMotion>
  );
}
