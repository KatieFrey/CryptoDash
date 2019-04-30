import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "../Settings";
//import styled, { css } from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppProvider>
            <AppBar />
            <Settings />
          </AppProvider>
        </AppLayout>
      </div>
    );
  }
}

export default App;
