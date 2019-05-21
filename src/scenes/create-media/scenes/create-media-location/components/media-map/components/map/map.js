import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Container from "../../../../../../../../components/container";

const Map = ({ className, style, forwardedRef, ...others }) => {
  // eslint-disable-next-line
  const _Map = _.flowRight([withScriptjs, withGoogleMap])(() => {
    class __Map extends React.Component {
      constructor(props) {
        super(props);
        const { geolocation } = navigator;
        // eslint-disable-next-line
        geolocation &&
          geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            this.setState({ latitude, longitude });
          });
        this.onDragEnd = this.onDragEnd.bind(this);
        this.getCurrentPosition = this.getCurrentPosition.bind(this);
        this.state = { latitude: undefined, longitude: undefined };
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
          /* eslint-disable */
          latitude = this.state.latitude || 48.8566,
          longitude = this.state.longitude || 2.3522
          /* eslint-enable */
        } = this.props;
        return (
          <GoogleMap defaultZoom={10} defaultCenter={{ lat: latitude, lng: longitude }}>
            <Marker
              {...others}
              defaultPosition={{ lat: latitude, lng: longitude }}
              onDragEnd={this.onDragEnd}
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
  forwardedRef: undefined,
  latitude: undefined,
  longitude: undefined
};

Map.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType(PropTypes.object, PropTypes.array),
  forwardedRef: PropTypes.object, // eslint-disable-line
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default React.forwardRef((props, forwardedRef) => <Map {...props} forwardedRef={forwardedRef} />);
