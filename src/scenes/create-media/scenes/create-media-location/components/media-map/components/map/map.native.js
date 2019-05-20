import React, { Component } from "react";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import requestLocationPermission from "../../../../../../../../utils/permissions/permission-location";
import Container from "../../../../../../../../components/container";

class Map extends Component {
  constructor(props) {
    super(props);
    requestLocationPermission().then(() => {
      const { geolocation } = navigator;
      // eslint-disable-next-line
      geolocation &&
        geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          this.setState({ latitude, longitude });
        });
    });
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.state = { latitude: undefined, longitude: undefined };
  }

  onDragEnd(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    this.setState({ latitude, longitude });
  }

  getCurrentPosition() {
    const { latitude, longitude } = this.state;
    return { latitude, longitude };
  }

  render() {
    const { geolocation } = navigator;
    const {
      style,
      /* eslint-disable */
      latitude = this.state.latitude,
      longitude = this.state.longitude,
      /* eslint-enable */
      ...others
    } = this.props;
    return geolocation && latitude && longitude ? (
      <Container style={style}>
        <MapView
          {...others}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
          showsUserLocation
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker {...others} coordinate={{ latitude, longitude }} onDragEnd={this.onDragEnd} />
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
