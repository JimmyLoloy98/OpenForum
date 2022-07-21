import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import DataContext from "../context/context";

function Login() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  let globalState = useContext(DataContext);

  function handleSubmit() {
    const user = { username: username, email: email };

    if (username == "" || email == "") {
      alert("Please fill all the fields");
    } else {
      localStorage.setItem("person", JSON.stringify(user));
      globalState.setUser(user);
    }
  }
  function handleSubmitUsername(event) {
    setUsername(event.target.value);
  }
  function handleSubmitEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <Navbar />

      <Container maxW={"60%"} minW={"400px"} h={"88vh"} pt={"10%"}>
        <Box
          maxW={"450px"}
          minW={"366px"}
          maxH={"320px"}
          mx={"auto"}
          padding={"30px 20px"}
          bg={"white"}
          borderRadius={"12px"}
        >
          <Heading fontWeight={"normal"} fontSize={"30px"} textAlign={"center"}>
            Welcome to OpenForum
          </Heading>

          <FormControl my={8} px={5}>
            <Input
              placeholder="Enter your username"
              focusBorderColor="orange.400"
              type={"text"}
              name={"username"}
              value={username}
              onChange={handleSubmitUsername}
            />

            <Input
              mt={6}
              type="email"
              name="email"
              placeholder="Enter your email"
              focusBorderColor="orange.400"
              value={email}
              onChange={handleSubmitEmail}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="orange"
            w={"100%"}
            fontWeight={"light"}
            onClick={handleSubmit}
          >
            ENTER
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Login;
