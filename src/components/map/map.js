import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Container from "../container";

const Map = ({ className, style, forwardedRef, ...others }) => {
  // eslint-disable-next-line
  const _Map = _.flowRight([
    // eslint-disable-line
    withScriptjs,
    withGoogleMap
  ])(() => {
    class __Map extends React.Component {
      constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.getCurrentPosition = this.getCurrentPosition.bind(this);
        this.state = { latitude: props.latitude, longitude: props.longitude };
      }

      onDragEnd(marker) {
        const { latLng } = marker;
        const latitude = latLng.lat();
        const longitude = latLng.lng();
        this.setState({ latitude, longitude });
      }

      getCurrentPosition() {
        const { latitude, longitude } = this.state;
        return { latitude, longitude };
      }

      render() {
        const {
          // eslint-disable-line
          latitude,
          longitude
        } = this.props;
        const {
          // eslint-disable-line
          latitude: currentLatitude,
          longitude: currentLongitude
        } = this.state;
        return (
          <GoogleMap
            defaultZoom={15}
            defaultCenter={{
              lat: currentLatitude || latitude,
              lng: currentLongitude || longitude
            }}
          >
            <Marker
              {...others}
              onDragEnd={this.onDragEnd}
              defaultPosition={{
                lat: currentLatitude || latitude,
                lng: currentLongitude || longitude
              }}
            />
          </GoogleMap>
        );
      }
    }
    // eslint-disable-next-line
    return <__Map {...others} ref={forwardedRef} />;
  });
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

Map.defaultProps = {
  className: undefined,
  style: undefined,
  forwardedRef: undefined
};

Map.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  forwardedRef: PropTypes.object, // eslint-disable-line
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardedRef) => (
    <Map
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
