import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import theme from "./theme";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
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

  let user = null
  
  useEffect(() => {
    if(!localStorage.getItem("estado")){
      localStorage.setItem("estado",JSON.stringify(globalState))
    }
  });

  return (
    <ChakraProvider theme={theme}> 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Navigate to="login"/> : <Home />} />
        <Route path="/login" element={!user ?<Login />:<Navigate to="/"/>}></Route>
        <Route path="/discussion" element={!user ? <Navigate to="/login" /> : <Discussion />}></Route>
        <Route path="/discussion/:id" element={!user ? <Navigate to="/login"/> :<DisplayDiscussion />}></Route>
      </Routes>
     </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
