import { AbsoluteCenter, Center, Image } from "@chakra-ui/react";

import { BoxMotion } from "../components/motion";
import logoWhite from "../media/logo/logo_white.svg";

type Props = {};

export default function IntroView({}: Props) {
  return (
    <Center
      bg="gray"
      h="100vh"
      overflow="hidden"
      pos="relative"
      w="100vw"
      // bgGradient="linear(to-b, #271F2E 0%, #0B3948 100%)"
    >
      <AbsoluteCenter>
        <BoxMotion
          animate={{ boxShadow: "0 0 60px rgba(0, 0, 0, 0.8)", scale: 20 }}
          bg="black"
          borderRadius="5rem"
          h="20vw"
          initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)", scale: 1 }}
          p="5"
          transition={{
            delay: 3,
            duration: 2,
            type: "spring",
          }}
          w="20vw"
        ></BoxMotion>
      </AbsoluteCenter>
      <BoxMotion
        animate={{ boxShadow: "0 0 60px rgba(0, 0, 0, 0)", scale: 0.9 }}
        bg="black"
        borderRadius="5rem"
        initial={{ boxShadow: "0 0 60px rgba(0, 0, 0, 0.7)", scale: 1 }}
        p="5"
        pos="relative"
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: 1,
          repeatType: "reverse",
          type: "spring",
        }}
      >
        <BoxMotion
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 0.3 }}
        >
          <Image boxSize="20vw" objectFit="contain" src={logoWhite} />
        </BoxMotion>
      </BoxMotion>
    </Center>
  );
}
