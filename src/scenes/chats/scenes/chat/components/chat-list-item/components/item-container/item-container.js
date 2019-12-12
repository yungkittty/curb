import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const ItemContainer = styled(Container)`
  ${props => {
    const { inverted } = props;
    const marginFlow = inverted ? "right" : "left";
    return `
      display: flex;
      flex-direction: column;
      width: 650px;
      max-width: 650px;
      min-width: 650px;
      margin-left: 20px;
      margin-right: 20px;
      margin-${marginFlow}: 70px;
    `;
  }}
`;

export default ItemContainer;
