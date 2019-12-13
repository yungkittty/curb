import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";

const ContentContainer = styled(Container)`
  ${props => {
    const { inverted } = props;
    const marginFlow = inverted ? "left" : "right";
    const borderRadiusFlow = inverted ? "right" : "right";
    return `
      display: flex;
      flex-direction: column;
      margin-${marginFlow}: auto;
      margin-bottom: 40px;
      border-radius: 20px;
      border-top-${borderRadiusFlow}-radius: 0px;
      overflow: hidden;
    `;
  }}
`;

export default ContentContainer;
