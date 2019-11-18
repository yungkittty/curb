import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Loader from "../loader";
import MapContainer from "./components/map-container";

class CardMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShowed: false, initialLatitude: undefined, initialLongitude: undefined };
    this.setInitialPosition = this.setInitialPosition.bind(this);
    this.locationMap = React.createRef();
  }

  componentDidMount() {
    const { latitude, longitude } = this.props;
    if (latitude && longitude) {
      this.setInitialPosition({ latitude, longitude });
      return;
    }
    const { geolocation } = navigator;
    setTimeout(() => {
      const { isShowed } = this.state;
      if (isShowed) return;
      this.setInitialPosition({ latitude: 48.8566, longitude: 2.3522 });
    }, 500);
    geolocation.getCurrentPosition(
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

  shouldComponentUpdate(prevProps, prevState) {
    return !_.isEqual(prevState, this.state);
  }

  setInitialPosition({ latitude, longitude }) {
    const { onPositionChange } = this.props;
    this.setState({ isShowed: true, initialLatitude: latitude, initialLongitude: longitude });
    onPositionChange({ latitude, longitude });
  }

  render() {
    const { style, ...others } = this.props;
    const { isShowed, initialLatitude, initialLongitude } = this.state;
    return !isShowed ? (
      <Loader />
    ) : (
      <MapContainer
        {...others}
        ref={this.locationMap}
        latitude={initialLatitude}
        longitude={initialLongitude}
        googleMapProps={{
          defaultOptions: {
            gestureHandling: "cooperative",
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false
          }
        }}
        draggable
      />
    );
  }
}

CardMap.defaultProps = {
  style: undefined,
  latitude: undefined,
  longitude: undefined,
  onPositionChange: () => null
};

CardMap.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  onPositionChange: PropTypes.func
};

export default CardMap;
