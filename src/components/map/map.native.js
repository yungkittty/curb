import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Container from "../container";

class Map extends Component {
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
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
          showsUserLocation
          region={{
            latitude: currentLatitude || latitude,
            longitude: currentLongitude || longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
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
  style: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default Map;
