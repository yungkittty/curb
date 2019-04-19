import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonText from "../../../../../../components/button-text";

const HeaderButtonText = styled(ButtonText).attrs(() => ({ type: "h5" }))`
  width: 175px;
  height: 35px;
  border-radius: 10px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`]};
`;

HeaderButtonText.propTypes = { groupTheme: PropTypes.string.isRequired };

export default HeaderButtonText;
