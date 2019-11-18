import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Container from "../container";

const Map = ({ className, style, googleMapProps, ...others }) => {
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
      }

      onDragEnd(marker) {
        const { onPositionChange } = this.props;
        const { latLng } = marker;
        const latitude = latLng.lat();
        const longitude = latLng.lng();
        onPositionChange({ latitude, longitude });
      }

      render() {
        const {
          // eslint-disable-line
          latitude,
          longitude
        } = this.props;
        return (
          <GoogleMap
            {...googleMapProps}
            defaultZoom={15}
            defaultCenter={{
              lat: latitude,
              lng: longitude
            }}
          >
            <Marker
              {...others}
              onDragEnd={this.onDragEnd}
              defaultPosition={{
                lat: latitude,
                lng: longitude
              }}
            />
          </GoogleMap>
        );
      }
    }
    // eslint-disable-next-line
    return <__Map {...others} />;
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
  googleMapProps: PropTypes.object, // eslint-disable-line
  onPositionChange: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default Map;
