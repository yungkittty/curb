import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";
import Container from "../container";

// https://github.com/react-native-community/react-native-maps/issues/705#issuecomment-343781344

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.state = { latitude: props.latitude, longitude: props.longitude };
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
      // eslint-disable-line
      style,
      latitude,
      longitude,
      ...others
    } = this.props;
    const {
      // eslint-disable-line
      latitude: currentLatitude,
      longitude: currentLongitude
    } = this.state;
    return (
      <Container
        style={{
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          overflow: "hidden"
        }}
      >
        <MapView
          {...others}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
          showsUserLocation
          region={{
            latitude: currentLatitude || latitude,
            longitude: currentLongitude || longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.01 // 15
          }}
        >
          <Marker
            {...others}
            onDragEnd={this.onDragEnd}
            coordinate={{
              latitude: currentLatitude || latitude,
              longitude: currentLongitude || longitude
            }}
          />
        </MapView>
      </Container>
    );
  }
}

Map.defaultProps = {
  style: undefined
};

Map.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default Map;
