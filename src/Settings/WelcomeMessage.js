import React from "react";
import { AppContext } from "../App/AppProvider";

//Pulling "firstVisit" from the state
export default ({ firstVisit }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            {" "}
            Welcome to CryToDash, please select your favorite coins to begin.
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
};
