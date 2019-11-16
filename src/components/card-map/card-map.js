import React from "react";
import PropTypes from "prop-types";
import Loader from "../loader";
import Map from "../map";
import Container from "../container";

class CardMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShowed: false, latitude: undefined, longitude: undefined };

    this.locationMap = React.createRef();
  }

  componentDidMount() {
    const { geolocation } = navigator;
    setTimeout(() => {
      const { isShowed } = this.state;
      if (isShowed) return;
      this.setState({
        isShowed: true,
        latitude: 48.8566,
        longitude: 2.3522
      });
    }, 5000);
    geolocation.getCurrentPosition(
      // eslint-disable-line
      currentPosition => {
        const {
          // eslint-disable-line
          latitude,
          longitude
        } = currentPosition.coords;
        this.setState({
          isShowed: true,
          latitude,
          longitude
        });
      }
    );
  }

  componentDidUpdate() {
    const { onUpdate } = this.props;
    const { current: locationMap } = this.locationMap;
    console.log(this.locationMap);
    //    const location = JSON.stringify(locationMap.getCurrentPosition());
    //    onUpdate({ data: location });
  }

  render() {
    const { style, ...others } = this.props;
    const { isShowed, latitude, longitude } = this.state;
    return !isShowed ? (
      <Container style={{ height: "100%", width: "100%", background: "blue" }} />
    ) : (
      <Container style={{ height: "100%", width: "100%", background: "red" }} />
    );
  }
}

CardMap.defaultProps = { style: undefined, onUpdate: () => null };

CardMap.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onUpdate: PropTypes.func
};

export default CardMap;
