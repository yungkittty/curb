import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonText from "../../../../../../components/button-text";

const HeaderButtonText = styled(ButtonText)`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`]};
`;

HeaderButtonText.propTypes = { groupTheme: PropTypes.string.isRequired };

export default HeaderButtonText;
