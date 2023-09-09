import { HTMLMotionProps } from "framer-motion";
import { ReactNode, Ref, forwardRef } from "react";

import { TextMotion } from "../motion";

type Props = HTMLMotionProps<"div"> & {
  color?: string;
  children: ReactNode;
};

export const SmallText = forwardRef(function SmallText(
  { color = "white", children, ...rest }: Props,
  ref: Ref<HTMLElement>
) {
  return (
    <TextMotion
      ref={ref}
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
});
