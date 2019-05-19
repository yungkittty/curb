import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import requestLocationPermission from "../../../../../../../../utils/permissions/permission-location";
import Container from "../../../../../../../../components/container";

class Map extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    requestLocationPermission().then(this.getLocation);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = { latitude: undefined, longitude: undefined };
  }

  onDragEnd({
    nativeEvent: {
      coordinate: { latitude, longitude }
    }
  }) {
    const { onDragEnd } = this.props;
    onDragEnd && onDragEnd({ latitude, longitude });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({ latitude, longitude });
    });
  }

  render() {
    const { latitude, longitude } = this.state;
    const { style, ...others } = this.props;
    return latitude && longitude ? (
      <Container style={style}>
        <MapView
          {...others}
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          zoomEnabled
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

export default Map;
