import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span.attrs(({ type }) => ({ as: type }))`
  margin: 0px;
  font-family: ${props => {
    switch (props.weight) {
      case 800:
        return "Montserrat-ExtraBold";
      case 700:
        return "Montserrat-Bold";
      case 600:
        return "Montserrat-SemiBold";
      case 500:
        return "Montserrat-Medium";
      case 300:
        return "Montserrat-Light";
      default:
        return "Montserrat-Regular";
    }
  }};
  ${props => {
    switch (props.type) {
      case "h1":
        return `
          font-size: 48px;
          ${props.isIndented ? `line-height: ${48 * 1.8}px;` : ""}
        `; // +12
      case "h2":
        return `
          font-size: 36px;
          ${props.isIndented ? `line-height: ${36 * 1.8}px;` : ""}
        `; // +12
      case "h3":
        return `
          font-size: 24px;
          ${props.isIndented ? `line-height: ${24 * 1.8}px;` : ""}
        `; // +6
      case "h4":
        return `
          font-size: 18px;
          ${props.isIndented ? `line-height: ${18 * 1.8}px;` : ""}
        `; // +4
      case "h5":
        return `
          font-size: 12px;
          ${props.isIndented ? `line-height: ${12 * 1.8}px;` : ""}
        `; // -2
      default:
        return `
          font-size: 14px;
          ${props.isIndented ? `line-height: ${14 * 1.8}px;` : ""}
        `;
    }
  }}
  font-weight: initial;

  color: ${props => props.theme.fontColor};
`;

// ${props => (props.isIndented ? "white-space: pre-wrap" : "")}

Text.defaultProps = {
  type: undefined,
  weight: 400,
  isIndented: false
};

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700, 800]),
  isIndented: PropTypes.bool
};

export default Text;
