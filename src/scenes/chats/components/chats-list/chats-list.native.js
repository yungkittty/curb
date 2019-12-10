import styled from "styled-components";
import ListFlat from "../../../../components/list-flat";

const ChatsList = styled(ListFlat)`
  ${props => {
    const listBackgroundColor = props.theme.primaryVariantColor;
    return `
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    background-color: ${listBackgroundColor};
  `;
  }}
`;

export default ChatsList;
