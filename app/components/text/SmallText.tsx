import { HTMLMotionProps } from "framer-motion";
import { ReactNode, Ref, forwardRef } from "react";

import { TextMotion } from "../motion";

type Props = HTMLMotionProps<"div"> & {
  color?: string;
  children: ReactNode;
};

const SmallText = forwardRef(function SmallText(
  { color = "white", children, ...rest }: Props,
  ref: Ref<HTMLElement>
) {
  return (
    <TextMotion
      ref={ref}
      color={color}
      fontSize={{ base: "xl", md: "3xl" }}
      fontWeight="bold"
      pos="relative"
      py={6}
      {...rest}
    >
      {children}
    </TextMotion>
  );
});

export default SmallText;
