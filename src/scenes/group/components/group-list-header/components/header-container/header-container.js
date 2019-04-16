import _ from "lodash";
import styled from "styled-components";
import ButtonContainer from "../../../../../../components/button-container";

const HeaderContainer = styled(ButtonContainer)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  min-height: 600px;
  margin-bottom: 50px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`]};
`;

export default HeaderContainer;
