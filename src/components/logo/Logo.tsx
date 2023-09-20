import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Box bg="GrayText" p="5" w="100%">
      <Text color="white" fontSize="8xl" variant="logo">
        MIKE IT
      </Text>
    </Box>
  );
}
