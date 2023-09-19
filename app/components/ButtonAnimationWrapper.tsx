import { ReactNode } from "react";

import { BoxMotion } from "./motion";

type Props = {
  children: ReactNode;
};

export default function ButtonAnimationWrapper({ children }: Props) {
  return (
    <BoxMotion
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </BoxMotion>
  );
}
