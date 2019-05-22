import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.Text`
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
          font-size: 36px;
          ${props.isIndented ? `line-height: ${36 * 1.5}px;` : ""}
        `; // +8
      case "h2":
        return `
          font-size: 24px;
          ${props.isIndented ? `line-height: ${24 * 1.5}px;` : ""}
        `; // +8
      case "h3":
        return `
          font-size: 18px;
          ${props.isIndented ? `line-height: ${18 * 1.5}px;` : ""}
        `; // +4
      case "h4":
        return `
          font-size: 16px;
          ${props.isIndented ? `line-height: ${14 * 1.5}px;` : ""}
        `; // +2
      case "h5":
        return `
          font-size: 12px;
          ${props.isIndented ? `line-height: ${12 * 1.5}px;` : ""}
        `; // -2
      case "h6":
        return `
          font-size: 10px;
          ${props.isIndented ? `line-height: ${10 * 1.5}px;` : ""}
        `; // -2
      default:
        return `
          font-size: 14px;
          ${props.isIndented ? `line-height: ${14 * 1.5}px;` : ""}
        `;
    }
  }}
  color: ${props => props.theme.fontColor};
`;

Text.defaultProps = {
  type: undefined,
  weight: 400,
  isIndented: false
};

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700, 800]),
  isIndented: PropTypes.bool
};

export default Text;
