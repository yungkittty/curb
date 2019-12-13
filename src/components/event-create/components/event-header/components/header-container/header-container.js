import styled from "styled-components";
import Container from "../../../../../container";

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  background-color: ${props => props.backgroundColor};
`;

export default HeaderContainer;
