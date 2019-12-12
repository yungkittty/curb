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
  }

  onDragEnd(event) {
    const { onPositionChange } = this.props;
    const {
      // eslint-disable-line
      latitude,
      longitude
    } = event.nativeEvent.coordinate;
    onPositionChange({ latitude, longitude });
  }

  render() {
    const {
      // eslint-disable-line
      style,
      latitude,
      longitude,
      onMapLoaded,
      ...others
    } = this.props;
    return (
      <Container
        style={{
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          overflow: "hidden"
        }}
      >
        <MapView
          {...others}
          onMapReady={() => onMapLoaded()}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
          showsUserLocation
          region={{
            latitude,
            longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.01 // 15
          }}
        >
          <Marker
            {...others}
            onDragEnd={this.onDragEnd}
            coordinate={{
              latitude,
              longitude
            }}
          />
        </MapView>
      </Container>
    );
  }
}

Map.defaultProps = {
  style: undefined,
  onMapLoaded: () => null
};

Map.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPositionChange: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  onMapLoaded: PropTypes.func
};

export default Map;
