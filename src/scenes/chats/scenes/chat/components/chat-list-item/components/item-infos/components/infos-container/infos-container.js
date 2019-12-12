import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";

const InfosContainer = styled(Container)`
  ${props => {
    const { inverted } = props;
    const justifyFlow = !inverted ? "start" : "end";
    return `
      display: flex;
      position: relative;
      flex-direction: row;
      justify-content: flex-${justifyFlow};
      margin-bottom: 5px;
    `;
  }}
`;

export default InfosContainer;
