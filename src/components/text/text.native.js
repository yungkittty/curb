import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.Text`
  ${props => {
    switch (props.type) {
      case "h1":
        return `font-size: 36px;`;
      case "h2":
        return `font-size: 24px;`;
      case "h3":
        return `font-size: 20px;`;
      case "h4":
        return `font-size: 18px;`;
      default:
        return `font-size: 14px;`;
    }
  }}
  ${props => {
    switch (props.weight) {
      case 100:
        return `font-family: "Montserrat-Thin";`;
      case 200:
        return `font-family: "Montserrat-ExtraLight";`;
      case 300:
        return `font-family: "Montserrat-Light";`;
      case 400:
        return `font-family: "Montserrat-Regular";`;
      case 500:
        return `font-family: "Montserrat-Medium";`;
      case 600:
        return `font-family: "Montserrat-SemiBold";`;
      case 700:
        return `font-family: "Montserrat-Bold";`;
      case 800:
        return `font-family: "Montserrat-ExtraBold";`;
      case 900:
        return `font-family: "Montserrat-Black";`;
      default:
        return undefined;
    }
  }}
  color: ${props => props.theme.fontColor};
`;

Text.defaultProps = { type: undefined, weight: 400 };

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  weight: PropTypes.oneOf([400, 500, 600, 700, 800])
};

export default Text;
