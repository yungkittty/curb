import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContentContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  align-items: flex-start;
  max-width: calc(100% - 550px);
  margin-right: 550px;
`;

export default HeaderContentContainer;
