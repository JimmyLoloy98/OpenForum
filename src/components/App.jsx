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
  let discussion = [
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
  ];

  let [user, setUser] = useState(users);
  // let [discussion, setDiscussion] = useState(discussion);

  /* let globalState =
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
        }; */

  useEffect(() => {
    console.log("estoy en un effect react js");
  });

  return (
    <DataContext.Provider value={{ setUser: setUser }}>
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
