import _ from "lodash";
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Container from "../../../../../../../../components/container";

const Map = ({ className, style, ...others }) => {
  // eslint-disable-next-line
  const _Map = _.flowRight([
    // eslint-disable-line
    withScriptjs,
    withGoogleMap
  ])(({ latitude, longitude }) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: latitude, lng: longitude }}>
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  ));
  return (
    // eslint-disable-next-line
    <_Map
      {...others}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDcWsoBDPjrG-5a3LaMxR0e883wqZrH7iU&libraries=geometry,drawing,places"
      loadingElement={<Container />}
      containerElement={<Container className={className} style={style} />}
      mapElement={<Container className={className} style={style} />}
    />
  );
};

export default Map;

// propTypes
