import React, { Component } from "react";
import PropTypes from "prop-types";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import createMedia from "../../../create-media"; // eslint-disable-line
import LocationMap from "./components/location-container";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    this.goToPrev = this.goToPrev.bind(this);
    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
    this.submit = this.submit.bind(this);
    const { setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalFooterButton } = props;
    setAppModalHeaderText({ text: "Localisation" });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: "Envoyer", onClick: this.submit });
  }

  onMarkerDragEnd({ latitude, longitude }) {
    this.latitude = latitude;
    this.longitude = longitude;
    console.log(latitude, longitude);
  }

  submit() {
    console.log(this.latitude);
    console.log(this.longitude);
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: createMedia, direction: -1 });
  }

  render() {
    return (
      <AppModalSceneContainer verticalAlign>
        <LocationMap isMarkerShown draggable onDragEnd={this.onMarkerDragEnd} />
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
// https://www.npmjs.com/package/react-native-location
