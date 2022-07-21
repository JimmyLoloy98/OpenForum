import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
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
  Text,
  Divider,
  Container,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import DataContext from "../context/context";

function Discussion({ data }) {
  return (
    <Container
      background={"white"}
      maxW={"60%"}
      mx={"auto"}
      padding={"20px 15px"}
      borderBottom={"1px solid #e6e6e6"}
    >
      <Link to={`/discussion/${data.idDiscussion}`}>{data.title}</Link>
      <Box display={"flex"} height="16px" mt={"4px"}>
        <Text fontSize="xs" color={"gray.400"}>
          by {data.author}
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
  function getHour() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${hour}:${minute}:${second}`;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  let globalState = useContext(DataContext);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [newDiscussion, setNewDiscussion] = useState({
    idDiscussion: randomId(),
    author: globalState.user.username,
    date: dateNow(),
    hour: getHour(),
    title: "",
    description: "",
    countResponses: 10,
    replys: [
      {
        author: "",
      },
    ],
  });

  function dateNow() {
    return new Date().toLocaleDateString().split(",")[0];
  }
  function randomId() {
    return Math.floor(Math.random() * 1000000);
  }
  function handleEventButton() {
    localStorage.setItem(
      "discussions",
      JSON.stringify(globalState.discussions)
    );
    let getDiscussions = JSON.parse(localStorage.getItem("discussions"));
    localStorage.setItem(
      "discussions",
      JSON.stringify([...getDiscussions, newDiscussion])
    );

    globalState.setDiscussion([
      ...globalState.discussions,
      {
        ...newDiscussion,
      },
    ]);

    onClose();
  }

  return (
    <Box mb={"28"}>
      <Navbar />

      {globalState.discussions.map((discussion, index) => {
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
              onChange={(e) => {
                setNewDiscussion({ ...newDiscussion, title: e.target.value });
              }}
            />

            <Textarea
              rows={5}
              placeholder="Body Title"
              mt={6}
              focusBorderColor="orange.400"
              onChange={(e) => {
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
              onClick={handleEventButton}
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
