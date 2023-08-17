import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  color?: string;
  children: ReactNode;
};

export function SmallText({ color = "white", children }: Props) {
  return (
    <Text
      color={color}
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="bold"
      pos="relative"
      py={6}
    >
      {children}
    </Text>
  );
}
