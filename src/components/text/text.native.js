import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.Text`
  ${props => {
    switch (props.type) {
      case "h1":
        return `
          font-size: 36px;
          font-weight: 700;
        `;
      case "h2":
        return `
          font-size: 24px;
          font-weight: 600;
        `;
      case "h3":
        return `
          font-size: 18px;
          font-weight: 400;
        `;
      case "h4":
        return `
          font-size: 14px;
          font-weight: 400;
        `;
      default:
        return `
          font-size: 12px;
          font-weight: 400;
        `;
    }
  }}
  ${props => `color: ${props.theme.fontColor}`}
`;

 // H3 => || 500 & 600 MODAL

Text.defaultProps = { type: undefined };

Text.propTypes = { type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]) };

export default Text;
