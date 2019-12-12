import React, { useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { chatsActions, chatsSelectors } from "../../datas/chats";

const withChat = WrappedComponent => {
  const WithChat = props => {
    const { shouldFetch, chatId: chatPropsId } = props;

    const { pathname } = props.location; // eslint-disable-line

    const chatParamsId = ((matchPath(pathname, { path: "/chats/:id" }) || {}).params || {}).id;

    const chatId = useMemo(() => chatPropsId || chatParamsId, [chatPropsId, chatParamsId]); // eslint-disable-line

    const { messages: chatMessages = [] } = useSelector(chatsSelectors.getChatById(chatId)) || {};

    const dispatch = useDispatch();

    const getChat = useCallback(payload => dispatch(chatsActions.getChatMessagesRequest(payload)), []);

    useEffect(() => {
      if (shouldFetch) getChat({ id: chatId });
    }, [chatId]);

    return (
      <WrappedComponent
        // eslint-disable-line
        {...props}
        chatId={chatId}
        chatMessages={chatMessages}
        getChat={getChat}
      />
    );
  };

  WithChat.defaultProps = {
    shouldFetch: true
  };

  WithChat.propTypes = {
    shouldFetch: PropTypes.bool,
    chatId: PropTypes.string.isRequired
  };

  return withRouter(WithChat);
};

export default withChat;
