import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  useDisclosure,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Link,
  Text,
  Divider,
  Container,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import DataContext from "../context/context";

function Discussion({ data }) {
  console.log(data);
  return (
    <Container
      background={"white"}
      maxW={"60%"}
      mx={"auto"}
      padding={"20px 15px"}
      borderBottom={"1px solid #e6e6e6"}
    >
      <Link>{data.title}</Link>
      <Box display={"flex"} height="16px" mt={"4px"}>
        <Text fontSize="xs" color={"gray.400"}>
          by {data.autor}
        </Text>
        <Divider orientation="vertical" mx={"4px"} />
        <Text fontSize="xs" color={"gray.400"}>
          {data.date}
        </Text>
        <Divider orientation="vertical" mx={"4px"} />
        <Text fontSize="xs" color={"gray.400"}>
          {data.countResponses} comments
        </Text>
      </Box>
    </Container>
  );
}

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const globalData = useContext(DataContext);

  const discussions = globalData.discussions;

  const [newDiscussion, setNewDiscussion] = useState({
    autor: "",
    date: "",
    title: "",
    description: "",
  });
  return (
    <Box>
      <Navbar />

      {discussions.map((discussion, index) => {
        return <Discussion data={discussion} key={index} />;
      })}

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
              onInput={(e) => {
                setNewDiscussion({ ...newDiscussion, title: e.target.value });
              }}
            />

            <Textarea
              rows={5}
              placeholder="Body Title"
              mt={6}
              focusBorderColor="orange.400"
              onInput={(e) => {
                setNewDiscussion({
                  ...newDiscussion,
                  description: e.target.value,
                });
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              w={"100%"}
              onClick={() => {
                console.log("agregamos la nueva discussion");
              }}
            >
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
