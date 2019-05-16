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
  ])(
    class extends React.Component {
      constructor(props) {
        super(props);
        const { geolocation } = navigator;
        // eslint-disable-next-line
        geolocation &&
          geolocation.getCurrentPosition(
            // eslint-disable-line
            ({ coords: { latitude, longitude } }) => {
              this.setState({ latitude, longitude });
            }
          );
        this.onDragEnd = this.onDragEnd.bind(this);
        this.state = { latitude: undefined, longitude: undefined };
      }

      onDragEnd(marker) {
        const { latLng } = marker;
        const latitude = latLng.lat();
        const longitude = latLng.lng();
        const { onDragEnd } = this.props;
        // eslint-disable-next-line
        onDragEnd && onDragEnd({ latitude, longitude }); //proptypes required
      }

      render() {
        const {
          // eslint-disable-line
          geolocation
        } = navigator;
        const {
          /* eslint-disable */
          latitude = this.state.latitude,
          longitude = this.state.longitude
          /* eslint-enable */
        } = this.props;
        return geolocation && latitude && longitude ? (
          <GoogleMap
            // eslint-disable-line
            defaultZoom={8}
            defaultCenter={{ lat: latitude, lng: longitude }}
          >
            <Marker
              // eslint-disable-line
              {...others}
              defaultPosition={{ lat: latitude, lng: longitude }}
              onDragEnd={this.onDragEnd}
            />
          </GoogleMap>
        ) : null;
      }
    }
  );
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
// recup la position comme en native si possible
