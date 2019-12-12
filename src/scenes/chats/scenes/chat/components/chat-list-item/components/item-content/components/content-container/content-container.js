import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";

const ContentContainer = styled(Container)`
  ${props => {
    const { inverted } = props;
    const marginFlow = inverted ? "left" : "right";
    const borderRadius = inverted ? "20px 0px 20px 20px" : "0px 20px 20px 20px";
    return `
      display: flex;
      flex-direction: column;
      margin-${marginFlow}: auto;
      margin-bottom: 40px;
      border-radius: ${borderRadius};
      overflow: hidden;
    `;
  }}
`;

export default ContentContainer;
