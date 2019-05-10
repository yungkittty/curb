import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
// eslint-disable-next-line
import createMedia from "../../../create-media";
import MediaMap from "./components/media-map";

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
    return (
      <Container style={{ height: "100%", width: "100%" }}>
        <MediaMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Container>
    );
  }
}

CreateMediaLocation.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default CreateMediaLocation;
/**<MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>**/
