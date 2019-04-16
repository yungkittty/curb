import _ from "lodash";
import styled from "styled-components";
import ButtonText from "../../../../../../components/button-text";

const HeaderButtonText = styled(ButtonText)`
  width: 300px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`]};
`;

export default HeaderButtonText;
