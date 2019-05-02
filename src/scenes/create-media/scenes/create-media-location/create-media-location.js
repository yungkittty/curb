import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
// eslint-disable-next-line
import createMedia from "../../../create-media";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    console.log("test");
    const { setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = props;
    setAppModalHeaderText({ text: "Localisation" });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: createMedia, direction: -1 })
    });
  }

  render() {
    return <Container style={{ height: "100%", width: "100%", backgroundColor: "blue" }}>Hey</Container>;
  }
}

CreateMediaLocation.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default CreateMediaLocation;
