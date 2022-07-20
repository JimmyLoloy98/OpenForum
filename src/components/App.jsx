import React, { useState, useEffect } from "react";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Discussion from "../pages/Discussion";
import DisplayDiscussion from "../pages/DisplayDiscussion";

import DataContext from "../context/context";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  let globalState =
    localStorage.getItem("estado") != null
      ? localStorage.getItem("estado")
      : {
          user: {
            username: "hijodedios",
            email: "pavel.mansilla@gmail.com",
          },
          discussions: [
            {
              idDiscussion: 10,
              autor: "J.K. Rowling",
              date: "01/01/2001",
              title: "Harry Potter y la piedra filosofal",
              countResponses: 10,
              description: "Harry Potter y la piedra filosofal",
              replys: [
                {
                  idReply: 11,
                  author: "J.K. Rowling",
                  date: "01/01/2022",
                  content: "Harry Potter y la piedra filosofal",
                },
              ],
            },
            {
              idDiscussion: 10,
              autor: "J.K. Rowling",
              date: "01/01/2001",
              title: "Harry Potter y la piedra filosofal",
              countResponses: 10,
              description: "Harry Potter y la piedra filosofal",
              replys: [
                {
                  idReply: 11,
                  author: "J.K. Rowling",
                  date: "01/01/2022",
                  content: "Harry Potter y la piedra filosofal",
                },
              ],
            },
          ],
        };

  let [state, setState] = useState(globalState);

  useEffect(() => {
    console.log("estoy en un effect react js");
  });

  console.log("el estado global", localStorage.getItem("estado"));
  return (
    <DataContext.Provider value={{ data: state, setData: setState }}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={!globalState.user ? <Navigate to="login" /> : <Home />}
            />
            <Route
              path="/login"
              element={!globalState.user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/discussion"
              element={
                !globalState.user ? <Navigate to="/login" /> : <Discussion />
              }
            ></Route>
            <Route
              path="/discussion/:id"
              element={
                !globalState.user ? (
                  <Navigate to="/login" />
                ) : (
                  <DisplayDiscussion />
                )
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </DataContext.Provider>
  );
}

export default App;
