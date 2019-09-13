import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  min-width: 500px;
  height: 160px;
  min-height: 160px;
  margin: auto;
  margin-bottom: 80px;
  padding-top: 20px;
`;

export default HeaderContainer;
