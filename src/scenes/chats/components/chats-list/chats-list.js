import styled from "styled-components";
import ListFlat from "../../../../components/list-flat";

const ChatsList = styled(ListFlat)`
  ${props => {
    const listBackgroundColor = props.theme.primaryVariantColor;
    return `
    width: 320px;
    max-width: 320px;
    min-width: 320px;
    height: 100%;
    background-color: ${listBackgroundColor};
  `;
  }}
`;

export default ChatsList;
