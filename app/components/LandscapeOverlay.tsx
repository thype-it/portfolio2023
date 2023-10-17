import {
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { isMobile, useMobileOrientation } from "react-device-detect";
import { MdOutlineCropRotate } from "react-icons/md";

export default function LandscapeOverlay() {
  const { isLandscape } = useMobileOrientation();

  return (
    <Modal isOpen={isMobile && isLandscape} onClose={() => null}>
      <ModalOverlay backdropBlur="3xl" backdropFilter="auto" />
      <ModalContent>
        <ModalHeader>Attention dear visitor</ModalHeader>
        <ModalBody>
          This website is not optimized for landscape mode. Please rotate your
          device.
        </ModalBody>
        <ModalFooter>
          <Icon as={MdOutlineCropRotate} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
