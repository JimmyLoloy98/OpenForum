import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Discussion from "../pages/Discussion";
import DisplayDiscussion from "../pages/DisplayDiscussion";


const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  return (
    <ChakraProvider theme={theme}> 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="discussion" element={<Discussion />}></Route>
        <Route path="discussion/:id" element={<DisplayDiscussion />}></Route>
      </Routes>
     </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
