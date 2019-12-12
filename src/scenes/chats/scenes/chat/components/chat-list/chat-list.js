import styled from "styled-components";
import ListFlat from "../../../../../../components/list-flat";

const ChatList = styled(ListFlat).attrs(() => ({
  // This is done to reach the right container.
  contentInnerContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40
  }
}))`
  width: 100%;
`;

export default ChatList;
