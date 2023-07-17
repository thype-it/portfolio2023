import { Container } from "@chakra-ui/react";

import HomePage from "./pages/home/HomePage";

type Props = {};

export default function App(props: Props) {
  return (
    <Container p={0} w="full">
      <HomePage />
    </Container>
  );
}
