import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 110px;
  background-color: ${props => props.backgroundColor};
`;

export default HeaderContainer;
