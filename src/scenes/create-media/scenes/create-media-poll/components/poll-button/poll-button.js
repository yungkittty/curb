import styled from "styled-components";
import Button from "../../../../../../components/button";

const PollButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({theme})=>theme.groupBlackColor};
  height: 38px;
  width: 80%;
  text-align: center;
  margin: 8px auto 8px auto;
  border-radius: 20px;
`;

export default PollButton;
