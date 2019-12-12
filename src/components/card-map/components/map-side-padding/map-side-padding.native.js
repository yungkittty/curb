import React from "react";
import Container from "../../../container";

const MapSidePadding = () => {
  const commonStyle = {
    position: "absolute",
    width: 50,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)"
  };
  return (
    <React.Fragment>
      <Container style={{ ...commonStyle, left: 0 }} />
      <Container style={{ ...commonStyle, right: 0 }} />
    </React.Fragment>
  );
};

export default MapSidePadding;
