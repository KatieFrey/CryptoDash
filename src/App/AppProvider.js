//Using React Context - App Provider is the State manager of the app

import React from "react";
const cc = require("cryptocompare");

//Create a new React context for us
export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    //Data returns all the coins
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  //Arrow function binds to the 'this' property
  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello"
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return {
        page: "settings",
        firstVisit: true
      };
      return {};
    }
  }

  setPage = page => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
