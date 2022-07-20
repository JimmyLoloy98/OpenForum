import { Box, ChakraProvider, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "./theme";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function Navbar() {
  let users = JSON.parse(localStorage.getItem("person"));
  let [user, setUser] = useState(users);

  function logout() {
    localStorage.removeItem("person");
  }

  return (
    <ChakraProvider theme={theme}>
      <Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
        <Box
          color="white"
          display="flex"
          margin="auto"
          maxW="920px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" {...linkStyles}>
            OpenForum News
          </Link>
          <Box display={"flex"}>
            <Text {...linkStyles}>{user != null ? user.username : ""}</Text>
            <Link href="/login" ml={4} {...linkStyles} onClick={logout}>
              {user != null ? "Logout" : "Login"}
            </Link>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Navbar;
