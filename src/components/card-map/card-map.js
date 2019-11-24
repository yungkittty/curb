import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Geolocation from "react-native-geolocation-service";
import Loader from "../loader";
import MapContainer from "./components/map-container";
import CurbModule from "../curb-module";
import { platformBools } from "../../configurations/platform";
import requestLocationPermission from "../../utils/permissions/request-location-permission";

class CardMap extends CurbModule {
  constructor(props) {
    super(props);

    this.state = { isShowed: false, latitude: undefined, longitude: undefined };
    this.setPosition = this.setPosition.bind(this);
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;
    if (latitude && longitude) {
      this.setPosition({ latitude, longitude });
      return;
    }
    this.defaultPositionTimeout = setTimeout(
      () => this.setPosition({ latitude: 48.8566, longitude: 2.3522 }),
      5000
    );
    const { geolocation } = navigator;
    if (platformBools.isWeb)
      this.watchId = geolocation.getCurrentPosition(({ coords }) => this.setPosition(coords));
    else {
      if (!requestLocationPermission()) return;
      this.watchId = Geolocation.getCurrentPosition(({ coords }) => this.setPosition(coords));
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    return !_.isEqual(prevState, this.state);
  }

  componentWillUnmount() {
    const { geolocation } = navigator;
    clearTimeout(this.defaultPositionTimeout);
    if (platformBools.isWeb) geolocation.clearWatch(this.watchId);
    else Geolocation.clearWatch(this.watchId);
  }

  getData() {
    const { latitude, longitude } = this.state;
    return JSON.stringify({ latitude, longitude });
  }

  setPosition({ latitude, longitude }) {
    const { isShowed } = this.state;
    const { onModuleIsValid } = this.props;
    clearTimeout(this.defaultPositionTimeout);
    this.setState({ isShowed: true, latitude, longitude });
    if (!isShowed) onModuleIsValid({ isValid: true });
  }

  render() {
    const { style, ...others } = this.props;
    const { isShowed, latitude, longitude } = this.state;
    return !isShowed ? (
      <Loader />
    ) : (
      <MapContainer
        {...others}
        latitude={latitude}
        longitude={longitude}
        onPositionChange={this.setPosition}
        googleMapProps={{
          defaultOptions: {
            gestureHandling: "cooperative",
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false
          }
        }}
      />
    );
  }
}

CardMap.defaultProps = {
  style: undefined,
  latitude: undefined,
  longitude: undefined,
  onModuleIsValid: () => null
};

CardMap.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  onModuleIsValid: PropTypes.func
};

export default CardMap;
