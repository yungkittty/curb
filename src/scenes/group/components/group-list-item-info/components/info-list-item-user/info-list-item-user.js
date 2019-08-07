/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Button from "../../../../../../components/button";
import ImageUser from "../../../../../../components/image-user";
import withUser from "../../../../../../hocs/with-user";

const InfoListItemUser = ({ userId, userName, theme }) => (
  <ListItemCircleText
    as={Button}
    onClick={`/users/${userId}`}
    component={ImageUser}
    userId={userId}
    size="large"
    placeholderColor={theme.primaryVariantColor}
    text={userName}
  />
);

export default withUser(InfoListItemUser);
