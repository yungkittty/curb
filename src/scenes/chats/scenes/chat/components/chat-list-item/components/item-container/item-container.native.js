import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const ItemContainer = styled(Container)`
  ${props => {
    const { inverted } = props;
    const marginFlow = inverted ? "right" : "left";
    return `
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-${marginFlow}: 65px;
    `;
  }}
`;

export default ItemContainer;
