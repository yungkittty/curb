import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const MiddleTitle = styled(Text)`
  ${props => {
    const { groupId } = props;
    const titleColor = groupId ? "white" : "black";
    return `
      color: ${titleColor};
    `;
  }}
`;

export default MiddleTitle;
