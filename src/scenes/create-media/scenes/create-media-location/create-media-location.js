import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
// eslint-disable-next-line
import createMedia from "../../../create-media";
import MediaMap from "./components/media-map";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalScene } = props;
    setAppModalHeaderText({ text: "Localisation" });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: createMedia, direction: -1 })
    });
  }

  render() {
    return (
      <Container style={{ height: "100%", width: "100%", padding: "150px" }}>
        <MediaMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDcWsoBDPjrG-5a3LaMxR0e883wqZrH7iU&libraries=geometry,drawing,places"
          loadingElement={<Container style={{ height: `100%` }} />}
          containerElement={<Container style={{ height: `100%` }} />}
          mapElement={<Container style={{ height: `100%` }} />}
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
