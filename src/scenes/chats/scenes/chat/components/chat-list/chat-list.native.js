import styled from "styled-components";
import ListFlat from "../../../../../../components/list-flat";

const ChatList = styled(ListFlat).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20
  }
}))`
  width: 100%;
`;

export default ChatList;
