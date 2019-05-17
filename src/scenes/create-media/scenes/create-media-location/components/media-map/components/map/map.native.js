import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Container from "../../../../../../../../components/container";

const Map = ({ style, latitude, longitude, ...others }) => (
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
    />
    <Marker draggable coordinate={{ latitude, longitude }} />
  </Container>
);

export default Map;
