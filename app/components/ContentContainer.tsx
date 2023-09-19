import { Container } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ContentContainer({ children }: Props) {
  return (
    <Container
      maxW={["container.md", "container.lg"]}
      padding={{ base: 6, md: 10 }}
    >
      {children}
    </Container>
  );
}
