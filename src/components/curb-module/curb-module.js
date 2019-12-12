import React from "react";

// https://medium.com/@yuribett/javascript-abstract-method-with-es6-5dbea4b00027

class CurbModule extends React.Component {
  // eslint-disable-next-line
  getData() {
    throw new Error("You have to implement the method getData!");
  }
}

export default CurbModule;
