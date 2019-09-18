import React from "react";
import PropTypes from "prop-types";
import Container from "../container";

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const {
      // eslint-disable-line
      src,
      ...others
    } = this.props;
    return (
      <Container style={{ ...style, overflow: "hidden", opacity: +isShowed }}>
         </Container>
    );
  }
}

Poll.defaultProps = {
  style: undefined
};

Poll.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Poll;