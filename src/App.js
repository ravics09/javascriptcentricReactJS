import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import "./App.css";
import { Store } from "./store";
import Routes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // const setThemePreferenece = (color) => {
  //   switch (color) {
  //     case "black":
  //       document.body.style.backgroundColor = "black";
  //       document.body.style.color = "white";
  //       break;
  //     case "green":
  //       document.body.style.backgroundColor = "green";
  //       document.body.style.color = "black";
  //       break;
  //     case "yellow":
  //       document.body.style.backgroundColor = "yellow";
  //       document.body.style.color = "black";
  //       break;
  //     case "red":
  //       document.body.style.backgroundColor = "red";
  //       document.body.style.color = "white";
  //       break;
  //     case "blue":
  //       document.body.style.backgroundColor = "blue";
  //       document.body.style.color = "white";
  //       break;
  //     default:
  //       document.body.style.backgroundColor = "white";
  //       document.body.style.color = "black";
  //   }
  // };

  // useEffect(() => {
  //   setThemePreferenece();
  // }, []);

  const theme1 = {
    backgroundColor: "black",
    height: "100%",
  };

  const theme2 = {
    backgroundColor: "white",
    height: "100%",
  };

  return (
    <div style={theme2}>
      <StoreProvider store={Store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
