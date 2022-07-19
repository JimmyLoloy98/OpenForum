import { Box, ChakraProvider, Heading, Link } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./Navbar";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* move this to navbar component */}
      <Navbar />
      {/* end navbar component */}

      <Box maxW="920px" margin="auto">
        <Heading>Welcome to Chaos</Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;
