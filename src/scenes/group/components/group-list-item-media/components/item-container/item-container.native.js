import styled from "styled-components";
import Container from "../../../../../../components/container";

const ItemContainer = styled(Container)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 100%;
  padding: 0px 40px;
  margin-bottom: 40px;
`;

export default ItemContainer;
