import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

class ListFlat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forwardedRef, ...props } = this.props;
    return <FlatList ref={forwardedRef} {...props} />;
  }
}

ListFlat.defaultProps = { forwardedRef: undefined, bounces: false };

ListFlat.propTypes = {
  forwardedRef: PropTypes.object, // eslint-disable-line
  bounces: PropTypes.bool
};

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardedRef) => (
    <ListFlat
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
