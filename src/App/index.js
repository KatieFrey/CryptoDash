import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
//import styled, { css } from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          {" "}
          <AppProvider>
            <AppBar />
            <WelcomeMessage />{" "}
          </AppProvider>
        </AppLayout>
      </div>
    );
  }
}

export default App;
