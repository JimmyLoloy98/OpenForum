import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Discussion from "../pages/Discussion";
import Home from "../pages/Home";
import ItemDiscussion from "../pages/ItemDiscussion";
import Login from "../pages/Login";
import theme from "./theme";

import DataContext from "../context/context";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  let users =
    JSON.parse(localStorage.getItem("person")) != null
      ? JSON.parse(localStorage.getItem("person"))
      : null;
  let discussions =
    JSON.parse(localStorage.getItem("discussions")) != null
      ? JSON.parse(localStorage.getItem("discussions"))
      : [
          {
            idDiscussion: randomId(),
            author: "J.K. Rowling",
            date: "01/01/2001",
            hour: "20:15:34",
            title: "Harry Potter y la piedra filosofal",
            countResponses: 10,
            description: "Harry Potter y la piedra filosofal",
            replys: [
              {
                idReply: 11,
                author: "Joe Satriani",
                date: "01/01/2022",
                hour: "20:15:34",
                content: "Harry Potter y la piedra filosofal",
              },
            ],
          },
        ];

  let [user, setUser] = useState(users);
  let [discussion, setDiscussion] = useState(discussions);

  function randomId() {
    return Math.floor(Math.random() * 1000000);
  }

  useEffect(() => {
    console.log("estoy en un effect react js");
  });

  return (
    <DataContext.Provider
      value={{
        setUser: setUser,
        discussions: discussion,
        setDiscussion: setDiscussion,
        user: user,
      }}
    >
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={!user ? <Navigate to="login" /> : <Home />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            ></Route>
            <Route
              path="/discussion"
              element={!user ? <Navigate to="/login" /> : <Discussion />}
            ></Route>
            <Route
              path="/discussion/:id"
              element={!user ? <Navigate to="/login" /> : <ItemDiscussion />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </DataContext.Provider>
  );
}

export default App;
