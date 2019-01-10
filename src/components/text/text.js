import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span.attrs({ as: ({ type }) => type })`
  margin: 0px;

  // font-size, font-weight
  ${({ type }) => {
    switch (type) {
      case "h1":
        return "font-size: 44px; font-weight: bold;";
      case "h2":
        return "font-size: 24px; font-weight: normal;";
      default:
        return "font-size: 14px; font-weight: normal;";
    }
  }};
`;

Text.defaultProps = { type: undefined };

Text.propTypes = { type: PropTypes.oneOf(["h1", "h2"]) };

export default Text;
