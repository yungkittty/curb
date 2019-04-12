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
  font-size: ${props => {
    switch (props.type) {
      case "h1":
        return 48; // +12
      case "h2":
        return 36; // +12
      case "h3":
        return 24; // +6
      case "h4":
        return 18; // +4
      case "h5":
        return 12; // -2
      default:
        return 14;
    }
  }}px;
  font-weight: initial;
  color: ${props => props.theme.fontColor};
`;

Text.defaultProps = { type: undefined, weight: 400 };

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700, 800])
};

export default Text;
