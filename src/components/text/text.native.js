import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.Text`
  ${props => {
    switch (props.type) {
      case "h1":
        return `font-size: 48px;`;
      case "h2":
        return `font-size: 36px;`;
      case "h3":
        return `font-size: 24px;`;
      case "h4":
        return `font-size: 18px;`;
      default:
        return `font-size: 14px;`;
    }
  }}
  font-weight: ${props => props.weight};
  color: ${props => props.theme.fontColor};
`;

Text.defaultProps = { type: undefined, weight: 400 };

Text.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  weight: PropTypes.oneOf([500, 600, 700, 800])
};

export default Text;
