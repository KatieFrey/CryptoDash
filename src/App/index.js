import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import styled, { css } from "styled-components";

class App extends Component {
  render() {
    return (
      <AppLayout>
        {" "}
        <WelcomeMessage />{" "}
      </AppLayout>
    );
  }
}

export default App;
