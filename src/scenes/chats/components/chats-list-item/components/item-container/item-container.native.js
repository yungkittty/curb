import styled from "styled-components";
import ButtonContainer from "../../../../../../components/button-container";

const ItemContainer = styled(ButtonContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
  max-width: 100%;
  padding-left: 50px
  padding-right: 50px
  margin-bottom: 10px;
  overflow: hidden;
`;

export default ItemContainer;
