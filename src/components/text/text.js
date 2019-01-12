import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span.attrs(({ type }) => ({ as: type }))`
  margin: 0px;
  ${props => {
    switch (props.type) {
      case "h1":
        return `
          font-size: 48px;
          font-weight: bold;
        `;
      case "h2":
        return `
          font-size: 36px;
          font-weight: normal;
        `;
      case "h3":
        return `
          font-size: 24px;
          font-weight: normal;
        `;
      default:
        return `
          font-size: 14px;
          font-weight: normal;
        `;
    }
  }};
  ${props => `color: ${props.theme.fontColor}`}
`;

Text.defaultProps = { type: undefined };

Text.propTypes = { type: PropTypes.oneOf(["h1", "h2"]) };

export default Text;
