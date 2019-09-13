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
  margin: auto;
  margin-bottom: 40px;
  padding-top: 20px;
`;

export default HeaderContainer;
