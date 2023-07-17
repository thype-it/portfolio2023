import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Box bg="GrayText" w="100%" p="5">
      <Text color="white" variant="logo" fontSize="8xl">
        MIKE IT
      </Text>
    </Box>
  );
}
