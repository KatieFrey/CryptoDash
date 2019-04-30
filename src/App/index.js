import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import styled, { css } from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          {" "}
          <AppBar />
          <WelcomeMessage />{" "}
        </AppLayout>
      </div>
    );
  }
}

export default App;
