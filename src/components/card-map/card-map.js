import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Loader from "../loader";
import MapContainer from "./components/map-container";
import CurbModule from "../curb-module";

class CardMap extends CurbModule {
  constructor(props) {
    super(props);

    this.state = { isShowed: false, latitude: undefined, longitude: undefined };
    this.setInitialPosition = this.setInitialPosition.bind(this);
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;
    if (latitude && longitude) {
      this.setInitialPosition({ latitude, longitude });
      return;
    }
    const { geolocation } = navigator;
    this.defaultPositionTimeout = setTimeout(() => {
      const { isShowed } = this.state;
      if (isShowed) return;
      this.setInitialPosition({ latitude: 48.8566, longitude: 2.3522 });
    }, 5000);
    this.watchId = geolocation.watchPosition(
      // eslint-disable-line
      currentPosition => {
        const {
          // eslint-disable-line
          latitude: currentLatitude,
          longitude: currentLongitude
        } = currentPosition.coords;
        this.setInitialPosition({ latitude: currentLatitude, longitude: currentLongitude });
      }
    );
  }

  getData() {
    const { latitude, longitude } = this.state;
    return JSON.stringify({ latitude, longitude });
  }

  shouldComponentUpdate(prevProps, prevState) {
    return !_.isEqual(prevState, this.state);
  }

  componentWillUnmount() {
    const { geolocation } = navigator;
    clearTimeout(this.defaultPositionTimeout);
    geolocation.clearWatch(this.watchId);
  }

  setInitialPosition({ latitude, longitude }) {
    const { onModuleIsValid } = this.props;
    this.setState({ isShowed: true, latitude, longitude });
    onModuleIsValid({ isValid: true });
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
