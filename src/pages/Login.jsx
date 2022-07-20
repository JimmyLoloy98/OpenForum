import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Navbar />

      <Container maxW={"60%"} h={"88vh"} pt={"10%"}>
        <Box
          maxW={"450px"}
          maxH={"320px"}
          mx={"auto"}
          padding={"30px 20px"}
          bg={"white"}
          borderRadius={"12px"}
        >
          <Heading fontWeight={"normal"} fontSize={"30px"} textAlign={"center"}>
            Welcome to OpenForum
          </Heading>

          <FormControl my={8} px={5} onSubmit={handleSubmit}>
            <Input
              placeholder="Enter your username"
              focusBorderColor="orange.400"
              type={"text"}
              name={"username"}
            />

            <Input
              mt={6}
              type="email"
              name="email"
              placeholder="Enter your email"
              focusBorderColor="orange.400"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="orange"
            w={"100%"}
            fontWeight={"light"}
          >
            ENTER
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Login;
