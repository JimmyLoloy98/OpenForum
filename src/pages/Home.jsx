import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box>
      <Navbar />

      <Modal
        size={"xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"4xl"} fontWeight={"normal"}>
            New Discussion
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              ref={initialRef}
              placeholder="Discussion Title"
              autoFocus
              focusBorderColor="orange.400"
            />

            <Textarea
              rows={5}
              placeholder="Body Title"
              mt={6}
              focusBorderColor="orange.400"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} w={"100%"}>
              Create Discussion
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        onClick={onOpen}
        position={"fixed"}
        right={"25px"}
        bottom={"25px"}
        textAlign={"end"}
        border={"none"}
      >
        <Button
          // onClick={onOpen}
          colorScheme="orange"
          borderRadius={"50%"}
          w={"55px"}
          h={"55px"}
          fontSize={"22px"}
        >
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
