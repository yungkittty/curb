import React from "react";
import WindowContainer from "./components/window-container";
import WindowHeader from "./components/window-header";

// Always have :
//  - a WindowHeader
//  - a WindowContent
//  - a WindowButton

const PopupWindow = () => (
  <WindowContainer>
    <WindowHeader />
    tata
    <br />
    test
  </WindowContainer>
);

export default PopupWindow;
