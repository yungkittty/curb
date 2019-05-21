import React, { Component } from "react";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Container from "../../../../../../../../components/container";

class Map extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.state = {
      isShowed: false,
      latitude: undefined,
      longitude: undefined
    };
  }

  componentDidMount() {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(currentPosition => {
      const {
        // eslint-disable-line
        latitude,
        longitude
      } = currentPosition.coords;
      this.setState({ isShowed: true, latitude, longitude });
    });
  }

  onDragEnd(event) {
    const {
      // eslint-disable-line
      latitude,
      longitude
    } = event.nativeEvent.coordinate;
    this.setState({ latitude, longitude });
  }

  getCurrentPosition() {
    const { latitude, longitude } = this.state;
    return { latitude, longitude };
  }

  render() {
    const {
      style,
      /* eslint-disable */
      latitude,
      longitude,
      /* eslint-enable */
      ...others
    } = this.props;
    const {
      isShowed,
      latitude: currentLatitude = 48.8566,
      longitude: currentLongitude = 2.3522
    } = this.state;
    return isShowed ? (
      <Container style={style}>
        <MapView
          {...others}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
          showsUserLocation
          region={{
            latitude: latitude || currentLatitude,
            longitude: longitude || currentLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            // eslint-disable-line
            {...others}
            onDragEnd={this.onDragEnd}
            coordinate={{
              latitude: latitude || currentLatitude,
              longitude: longitude || currentLongitude
            }}
          />
        </MapView>
      </Container>
    ) : null;
  }
}

Map.defaultProps = {
  style: undefined,
  latitude: undefined,
  longitude: undefined
};

Map.propTypes = {
  style: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default Map;
