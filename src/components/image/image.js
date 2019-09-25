import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const {
      // eslint-disable-line
      isShowed
    } = this.state;
    const {
      // eslint-disable-line
      src,
      onLoadStart,
      onLoad,
      style,
      objectFit,
      ...others
    } = this.props;
    const isImageString = typeof src === "string";
    const isImageApi = isImageString && src.substr(0, 9) === "/contents";
    return (
      /* eslint-disable-next-line */
      <img
        {...others}
        src={isImageApi ? `${process.env.REACT_APP_API_URL}${src}` : src}
        onLoadStart={event => {
          // eslint-disable-next-line
          onLoadStart && onLoadStart(event);
          this.setState({ isShowed: false });
        }}
        onLoad={event => {
          // eslint-disable-next-line
          onLoad && onLoad(event);
          this.setState({ isShowed: true });
        }}
        style={{
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          objectFit,
          opacity: +isShowed
        }}
      />
    );
  }
}

Image.defaultProps = {
  onLoadStart: undefined,
  onLoad: undefined,
  style: undefined,
  objectFit: undefined
};

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default Image;
