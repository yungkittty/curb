import React, { Component } from "react";
import PropTypes from "prop-types";
//import Geolocation from "react-native-geolocation-service";
//import { PermissionsAndroid } from "react-native";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import createMedia from "../../../create-media"; // eslint-disable-line
import LocationMap from "./components/location-container";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    this.goToPrev = this.goToPrev.bind(this);
    this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
    this.submit = this.submit.bind(this);

    //   this.test = this.test.bind(this);

    const { setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalFooterButton } = props;
    setAppModalHeaderText({ text: "Localisation" });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: "Envoyer", onClick: this.submit });
  }
  /*
  componentDidMount() {
 //  this.test();
  }
*/
  onMarkerDragEnd({ latitude, longitude }) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  /*async test() {
    // Instead of navigator.geolocation, just use Geolocation.
    const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
    this.lol = 0;
  }*/

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
        <LocationMap
          isMarkerShown
          onDragEnd={this.onMarkerDragEnd}
          draggable
          latitude={37.101}
          longitude={150.022}
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
// https://www.npmjs.com/package/react-native-location
