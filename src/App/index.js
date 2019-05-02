import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from "./AppProvider";
import Settings from "../Settings";
import Dashboard from "../Dashboard";
import Content from "../Shared/Content";
//import styled, { css } from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout>
          <AppProvider>
            <AppBar />
            <Content>
              <Settings />
              <Dashboard />
            </Content>
          </AppProvider>
        </AppLayout>
      </div>
    );
  }
}

export default App;
