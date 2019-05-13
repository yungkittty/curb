import React, { Component } from "react";
import PropTypes from "prop-types";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import createMedia from "../../../create-media"; // eslint-disable-line
import LocationMap from "./components/location-container";
// import Map from "./components/media-map/components/map";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalFooterButton } = props;
    this.goToPrev = this.goToPrev.bind(this);
    setAppModalHeaderText({ text: "Localisation" });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: "Envoyer", onClick: this.submit });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: createMedia, direction: -1 });
  }

  render() {
    return (
      <AppModalSceneContainer verticalAlign>
        <LocationMap
          isMarkerShown
          // loadingElement={<LocationContainer />}
          // containerElement={<LocationContainer />}
          // mapElement={<LocationContainer />}
          latitude={-34.397}
          longitude={150.644}
        />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaLocation.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default CreateMediaLocation;

// appmodalscenecontainer props: longitude, lattitude, container
//  map props: isMarkerShown, googlemapurl, loadingelement, containerelement, mapelement
