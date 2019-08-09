import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const ButtonText = styled(Text)`
  ${props => {
    const { isCurrentUserIn, groupGradientColors } = props;
    const TextMarginRight = isCurrentUserIn ? 10 : 0;
    const TextColor = isCurrentUserIn ? "white" : groupGradientColors[0];
    return `
      margin-right: ${TextMarginRight}px;
      color: ${TextColor};
    `;
  }}
`;

ButtonText.propTypes = {
  isCurrentUserIn: PropTypes.bool.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ButtonText;
