import styled from "styled-components";
import Input from "../../../../../../../../components/input";

const HeaderTitle = styled(Input)`
  background-color: transparent;
  width: 380px;
  height: 46px;
  text-align: center;
  border-bottom: 1px solid white;
  color: white;
  ::placeholder {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default HeaderTitle;
