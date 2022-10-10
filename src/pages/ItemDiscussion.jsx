import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  Textarea,
  Link,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ReplyDiscussion() {
  return (
    <Box>
      <Box display={"flex"} height="16px" mb={2}>
        <Text fontSize="sm" color={"gray.600"}>
          {"que es esto"}
        </Text>
        <Divider orientation="vertical" mx={"4px"} />
        <Text fontSize="sm" color={"gray.600"}>
          12-02-19
        </Text>
      </Box>

      <Text fontSize={"xl"}>This is a first reply</Text>

      <Textarea
        rows={3}
        placeholder="Write Reply"
        mt={4}
        mb={4}
        focusBorderColor="orange.400"
      />
      <Button colorScheme="orange" w={"200px"} fontWeight={"light"}>
        Reply
      </Button>

      <Box my={6} ml={8}>
        <Box display={"flex"} height="16px" mb={2}>
          <Text fontSize="sm" color={"gray.600"}>
            Condef5
          </Text>
          <Divider orientation="vertical" mx={"4px"} />
          <Text fontSize="sm" color={"gray.600"}>
            2022-07-20
          </Text>
          <Divider orientation="vertical" mx={"4px"} />
          <Text fontSize="sm" color={"gray.600"}>
            21:45:18
          </Text>
        </Box>

        <Text>This is a reply of reply</Text>
      </Box>
    </Box>
  );
}

function ItemDiscussion() {
  let [reply, setReply] = useState({
    author: "",
    date: "",
    hour: "",
    content: "",
  });
  let { id } = useParams();
  let initialDiscussions = JSON.parse(localStorage.getItem("discussions"))
    ? JSON.parse(localStorage.getItem("discussions"))
    : [];
  const [discussions, setDiscussions] = useState(initialDiscussions);

  console.log("todas las discusiones", discussions);

  let findDiscussion = discussions.find(
    (discussion) => discussion.idDiscussion == id
  );

  function handleReply(event) {
    setReply({ ...reply, contentReply: event.target.value });
  }

  function handleSubmitReply() {
    const formatDiscussion = discussions.map((d) => {
      if (d.idDiscussion == id) {
        return { ...d, replys: [...d.replys, reply] };
      }
      return d;
    });
    localStorage.setItem("discussions", JSON.stringify(discussions));
    setDiscussions(formatDiscussion);
  }
  console.log("findDiscussion here", findDiscussion);

  return (
    <>
      <Navbar />

      <Container maxW="60%" padding={"15px"} bg={"white"}>
        <Link href="/" size="lg">
          <Button w="full">Volver</Button>
        </Link>
        <Divider my="4" />
        <Box>
          <Heading fontWeight={"semibold"}>{findDiscussion.title}</Heading>

          <Box display={"flex"} height="16px" mt={2} mb={4}>
            <Text fontSize="sm" color={"gray.600"}>
              {findDiscussion.author}
            </Text>
            <Divider orientation="vertical" mx={"4px"} />
            <Text fontSize="sm" color={"gray.600"}>
              {findDiscussion.date}
            </Text>
            <Divider orientation="vertical" mx={"4px"} />
            <Text fontSize="sm" color={"gray.600"}>
              {findDiscussion.hour != null ? findDiscussion.hour : "00:00:00"}
            </Text>
          </Box>

          <Text fontSize={"xl"}>{findDiscussion.description}</Text>
        </Box>

        <Box mt={5} mb={6}>
          <Textarea
            rows={5}
            mb={4}
            placeholder="Write a comment..."
            focusBorderColor="orange.400"
            onChange={handleReply}
          />
          <Button
            colorScheme="orange"
            w={"100%"}
            fontWeight={"light"}
            onClick={handleSubmitReply}
          >
            Reply
          </Button>
        </Box>

        <ReplyDiscussion />
      </Container>
    </>
  );
}

export default ItemDiscussion;
