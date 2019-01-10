import styled from "styled-components";
import Button from "../../../../../../../../components/button";

const ButtonContainer = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  min-width: 45px;
  height: 45px;
  margin-right: 20px; // !
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonContainer;
