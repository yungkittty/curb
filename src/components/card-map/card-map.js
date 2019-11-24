import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Geolocation from "react-native-geolocation-service";
import MapLoader from "./components/map-loader";
import MapContainer from "./components/map-container";
import MapSidePadding from "./components/map-side-padding";
import CurbModule from "../curb-module";
import { platformBools } from "../../configurations/platform";
import requestLocation from "../../utils/request-location";

class CardMap extends CurbModule {
  constructor(props) {
    super(props);

    this.state = { isShowed: false, latitude: undefined, longitude: undefined };
    this.setPosition = this.setPosition.bind(this);
    this.onMapLoaded = this.onMapLoaded.bind(this);
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
    this.watchId = requestLocation(({ coords }) => this.setPosition(coords));
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
    clearTimeout(this.defaultPositionTimeout);
    this.setState({ latitude, longitude });
  }

  onMapLoaded() {
    const { onModuleIsValid } = this.props;
    this.setState({ isShowed: true });
    onModuleIsValid({ isValid: true });
  }

  render() {
    const { style, ...others } = this.props;
    const { isShowed, latitude, longitude } = this.state;
    return (
      <React.Fragment>
        {!isShowed && <MapLoader />}
        {latitude && longitude && (
          <MapContainer
            {...others}
            latitude={latitude}
            longitude={longitude}
            onPositionChange={this.setPosition}
            onMapLoaded={this.onMapLoaded}
            style={{ opacity: +isShowed }}
            googleMapProps={{
              defaultOptions: {
                gestureHandling: "cooperative",
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false
              }
            }}
          />
        )}
        <MapSidePadding />
      </React.Fragment>
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
