import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Container from "../../../../../../../../components/container";

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
        this.state = {
          isShowed: false,
          latitude: undefined,
          longitude: undefined
        };
      }

      componentDidMount() {
        const { geolocation } = navigator;
        geolocation.getCurrentPosition(currentPosition => {
          const {
            // eslint-disable-line
            latitude,
            longitude
          } = currentPosition.coords;
          this.setState({ isShowed: true, latitude, longitude });
        });
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
          latitude,
          longitude
          /* eslint-enable */
        } = this.props;
        const {
          isShowed,
          latitude: currentLatitude = 48.8566,
          longitude: currentLongitude = 2.3522
        } = this.state;
        return isShowed ? (
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{
              lat: latitude || currentLatitude,
              lng: longitude || currentLongitude
            }}
          >
            <Marker
              {...others}
              onDragEnd={this.onDragEnd}
              defaultPosition={{
                lat: latitude || currentLatitude,
                lng: longitude || currentLongitude
              }}
            />
          </GoogleMap>
        ) : null;
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
