import React from "react";
import Map from "./components/map";
import Container from "../../../../../../components/container";

const MediaMap = ({ isMarkerShown, loadingElement, containerElement, mapElement, latitude, longitude }) => (
  <Map
    isMarkerShown={isMarkerShown || true}
    // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDcWsoBDPjrG-5a3LaMxR0e883wqZrH7iU&libraries=geometry,drawing,places"
    // loadingElement={loadingElement || <Container />}
    // containerElement={containerElement || <Container />}
    // mapElement={mapElement || <Container />}
    latitude={latitude || undefined}
    longitude={longitude || undefined}
  />
);

export default MediaMap;

// pas utile
//proptypes
