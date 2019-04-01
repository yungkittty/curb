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
      default:
        return "Montserrat-Regular";
    }
  }};
  font-size: ${props => {
    switch (props.type) {
      case "h1":
        return 36; // +8
      case "h2":
        return 28; // +8
      case "h3":
        return 20; // +4
      case "h4":
        return 16; // +2
      default:
        return 14;
    }
  }}px;
  color: ${props => props.theme.fontColor};
`;

Text.defaultProps = { type: undefined, weight: 400 };

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  weight: PropTypes.oneOf([400, 500, 600, 700, 800])
};

export default Text;
