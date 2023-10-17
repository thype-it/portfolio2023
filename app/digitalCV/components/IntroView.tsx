import { AbsoluteCenter, Center } from "@chakra-ui/react";

import { ChakraNextImage } from "@/app/components/media";
import { BoxMotion } from "@/app/components/motion";
import logoWhite from "@/public/media/logo/logo_white.svg";

export default function IntroView() {
  return (
    <BoxMotion
      animate={{ opacity: 0, transitionEnd: { display: "none" } }}
      initial={{ opacity: 1 }}
      left={0}
      pos="fixed"
      top={0}
      transition={{
        delay: 1.2,
        duration: 0,
      }}
      zIndex={30}
    >
      <Center
        bg="gray"
        h="fullHeight"
        overflow="hidden"
        pos="relative"
        w="100vw"
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
              delay: 1,
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
            repeat: 1,
            repeatType: "reverse",
            type: "spring",
          }}
        >
          <BoxMotion
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <ChakraNextImage
              alt="White MikeIt Logo"
              boxSize="20vw"
              objectFit="contain"
              src={logoWhite}
            />
          </BoxMotion>
        </BoxMotion>
      </Center>
    </BoxMotion>
  );
}
