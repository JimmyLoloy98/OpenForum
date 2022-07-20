import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function ItemDiscussion() {
  return (
    <>
      <Navbar />

      <Container maxW="60%" padding={"15px"} bg={"white"}>
        <Box>
          <Heading fontWeight={"semibold"}>How to kill to Christopher</Heading>

          <Box display={"flex"} height="16px" mt={2} mb={4}>
            <Text fontSize="sm" color={"gray.600"}>
              PavelM
            </Text>
            <Divider orientation="vertical" mx={"4px"} />
            <Text fontSize="sm" color={"gray.600"}>
              2019-06-13
            </Text>
            <Divider orientation="vertical" mx={"4px"} />
            <Text fontSize="sm" color={"gray.600"}>
              21:45:18
            </Text>
          </Box>

          <Text fontSize={"xl"}>Some body in the sky</Text>
        </Box>

        <Box mt={5} mb={6}>
          <Textarea
            rows={5}
            mb={4}
            placeholder="Write a comment..."
            focusBorderColor="orange.400"
          />
          <Button colorScheme="orange" w={"100%"} fontWeight={"light"}>
            Reply
          </Button>
        </Box>

        <Box>
          <Box display={"flex"} height="16px" mb={2}>
            <Text fontSize="sm" color={"gray.600"}>
              JimmyLoloy98
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
      </Container>
    </>
  );
}

export default ItemDiscussion;
