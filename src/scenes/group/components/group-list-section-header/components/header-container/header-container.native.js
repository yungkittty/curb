import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 120px;
  min-height: 120px;
  padding-top: 20px;
  margin-bottom: 40px;
`;

export default HeaderContainer;
