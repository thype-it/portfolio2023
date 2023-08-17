import { Button, ChakraProps, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdExpandCircleDown } from "react-icons/md";

type Props = ChakraProps & {
  children?: ReactNode;
  isInverted?: boolean;
};

const defualtButtonText = "Find out more";

export default function DiscoverButton({
  children,
  isInverted = false,
  ...rest
}: Props) {
  return (
    <Button
      borderRadius={40}
      fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
      fontWeight="bold"
      iconSpacing={{ base: 3, md: 4, lg: 6 }}
      pl={{ base: "6", md: "7", lg: "10" }}
      pr={{ base: "5", md: "6", lg: "8" }}
      py={{ base: "8", md: "9", lg: "12" }}
      rightIcon={
        <Icon
          as={MdExpandCircleDown}
          boxSize={{ base: 12, md: 14, lg: 16 }}
          style={{ transform: "rotate(-90deg)" }}
        />
      }
      variant={isInverted ? "outlineInverted" : "outline"}
      w="max-content"
      {...rest}
    >
      {children ? children : defualtButtonText}
    </Button>
  );
}
