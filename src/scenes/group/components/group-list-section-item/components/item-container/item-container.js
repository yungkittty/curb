import styled from "styled-components";
import Container from "../../../../../../components/container";

/** @todo flex-shrink: 0; pas ok shrink ! */

const ItemContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-width: 500px;
  margin-bottom: 40px;
`;

export default ItemContainer;
